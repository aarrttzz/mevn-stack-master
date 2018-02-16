<template>
  <v-container class="pa-0">
    <v-container>
      <template>
        <v-layout row>
          <v-flex>
            <v-card>

              <!-- Begin Toolbar -->
              <v-toolbar>
                <v-toolbar-title> Articles </v-toolbar-title>
                <v-btn flat color="orange" @click="addDialog=true">Add Article</v-btn>
                  <v-btn flat color="orange" @click="editDialog=false">Close All</v-btn>
                <v-spacer></v-spacer>


                <span v-if="alertSettings.success">
                  <v-alert v-model="alert" color="success" dismissible icon="check_circle" transition=scale-transition>
                    {{ alertSettings.callName }} was a Success. 
                  </v-alert>
                </span>
                <span v-else>
                  <v-alert v-model="alert" color="error" dismissible icon="warning" transition=scale-transition>
                    {{ alertSettings.callName }} Failed.
                  </v-alert>
                </span>
              </v-toolbar>

              <span  v-if="addDialog">
                    <articleAddDialog :rules="rules"
                                       @submission="submit" @closeAdd="addDialog = false">
                  </articleAddDialog>
              </span>

              <span  v-if="editDialog">
                      <articleEditDialog :rules="rules" :article="articleToEdit" :editTitle="editTitle"
                                         @edited="edit" @closeEdit="editDialog = false; articleToEdit = {}">
                      </articleEditDialog>
              </span>

              <span  v-if="deleteDialog">
                    <articleDeleteDialog :article="articleToDelete" @closeDelete="deleteDialog = false"
                                   @deleted="deleteArticle">
                    </articleDeleteDialog>
              </span>





              <span  v-if="articles.length">
                <articleItem v-for="article in articles" :key="article._id"
                             :article="article" @setUpEdit="setupEdit(article)"
                             @setUpDelete="setupDelete(article)">
                 </articleItem>
              </span>
              <v-card v-else class="headline text-xs-center">No Aticles to show</v-card>

            </v-card>
          </v-flex>
        </v-layout>
      </template>
    </v-container>
  </v-container>
</template>

<script>
import { http } from "../config/http.js"
import articleItem from "../components/article.vue"
import articleAddDialog from "../components/articleAddDialog.vue"
import articleEditDialog from "../components/articleEditDialog.vue"
import articleDeleteDialog from "../components/articleDeleteDialog.vue"
import UploadImage from 'vue-upload-image';

export default {
  //Variables
  data: () => ({
    errors: [],
    articles: [],
    articleToDelete: {},
    alertSettings: {}, //this is to abstract our our alerts to make them easier and stop repeating code
    articleToEdit: {
        title:'init',
        images:[]
    },
    newArticle: {},
    addDialog: false,
    deleteDialog: false,
    editDialog: false,
    alert: false,
    editTitle: "",
    rules: {
      email: value => {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    }
  }),

  //Components this page will need
  components: {
    articleItem: articleItem,
      articleAddDialog: articleAddDialog,
      articleEditDialog: articleEditDialog,
      articleDeleteDialog: articleDeleteDialog,
      UploadImage:UploadImage
  },

  //The methods we will need
  methods: {
    //load all articles from DB, we call this often to make sure the data is up to date
    load() {
      http
        .get("articles")
        .then(response => {
          this.articles = response.data.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },

    //opens delete dialog
    setupDelete(article) {
      this.articleToDelete = article;
      this.deleteDialog = true;
    },

    //opens edit dialog
    setupEdit(article) {
        var me = this;
       Object.keys(article).forEach(key => {
        me.articleToEdit[key] = article[key];
      });
      me.editDialog = true;
    },

    //Delete An Article
    deleteArticle(tempArticle) {
      this.alertSettings.callName = "Delete";
      console.log(tempArticle._id);
      http
        .delete("/articles/" + tempArticle._id)
        .then(response => {
          if (response.status == 204) {
            this.alertProc(true, "Delete");
            console.log(response);
            //this removes the article from the list of articles on the page
            // let index = this.articles.indexOf(temparticle);
            // this.articles.splice(index, 1);
            this.load();
            this.deleteDialog = false;
          } else {
            this.alertProc(false, "Delete");
            console.log(response);
            this.deleteDialog = false;
          }
        })
        .catch(e => {
          this.alertProc(false, "Delete");
          console.log(e);
          this.errors.push(e);
          this.deleteDialog = false;
        });
    },

    //adds an article
    submit(article) {
      http
        .post("/articles", article)
        .then(response => {
          console.log(response);
          this.load()
          this.addDialog = false;
          this.newArticle = {};
          this.alertProc(true, "Submission");
        })
        .catch(e => {
          this.errors.push(e);
          this.addDialog = false;
          this.alertProc(false, "Submission");
        });
    },

    //edits an article
    edit(changedArticle) {
      http
        .put("/articles/" + changedArticle._id, changedArticle)
        .then(response => {
          console.log(response.data.data);
          this.articleToEdit = {};
          this.editDialog = false;
          this.load();
          this.alertProc(true, "Edit");
        })
        .catch(e => {
          console.log(e);
          this.errors.push(e);
          this.editDialog = false
          this.alertProc(false, "Edit");
        });
    },

    //build the alert info for us
    //the first is a bool of whether or not the call was a success, the second the name of the call
    alertProc(success, callName) {
      this.alertSettings.callName = callName;
      this.alertSettings.success = success;
      this.alert = true;
      console.log(this.alert + "");
    }
  },

  //get those articles
  mounted() {
    this.load();
  }
};
</script>