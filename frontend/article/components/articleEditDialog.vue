<template>
  <v-card>
    <v-toolbar>
      <div class="headline"> Edit Article </div>
    </v-toolbar>
    <v-container fluid>
      <v-card-text>

        <!-- Begin Input Row -->
        <v-form ref="form">

          <fileUploader @upload-images-chaned="uploadImageAttemt"
                        :images="changedArticle.images">
          </fileUploader>


          <v-text-field label="Title" v-model="changedArticle.title"> </v-text-field>
          <v-text-field label="SubTitle" v-model="changedArticle.subtitle"> </v-text-field>
          <v-text-field label="Description" v-model="changedArticle.description"> </v-text-field>
          <v-text-field label="Tags" v-model="changedArticle.tags"> </v-text-field>
          <linksEditor @links-changed="updateLinks" :links="changedArticle.links"></linksEditor>
          <v-date-picker @input="dateChanged" v-model="mydate" landscape> </v-date-picker>

          <v-btn @click="$emit('edited', changedArticle)" class="green lighten-1 white--text">Submit</v-btn>
          <v-btn @click="$emit('closeEdit')" class="red white--text">Close</v-btn>
        </v-form>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>

    import fileUploader from "../components/fileUploader.vue"
    import linksEditor from "../components/linksEditor.vue"

export default {

    data: function () {
        return {
            mydate: new Date().now,
            changedArticle: {
            },
        }
    },

    components: {
        fileUploader: fileUploader,
        linksEditor: linksEditor
    },

  props: ['article','editTitle'],


  created() {
      console.log('edit dialog created')
  },
    destroyed(){
        console.log('edit dialog destroyed')
    },
    mounted() {
        console.log('edit dialog maunted')
        this.changedArticle = this.article;
        this.mydate = this.changedArticle.date;
    },
    updated() {
        var me = this;
        console.log('edit dialog updated')
    },
    methods: {
        dateChanged(date){
            var me = this;
            me.changedArticle.date = date;
        },
        uploadImageAttemt(images){
            var me = this;
            me.changedArticle.images = images;
        },
        updateLinks(links){
            var me = this;
            me.changedArticle.links = links;
        },
    }
}
</script>

<style>

</style>
