<template>


    <v-card>
      <v-toolbar>
        <div class="headline"> Add An Article </div>
      </v-toolbar>
      <v-container fluid>



        <v-card-text>

          <!-- Begin Input Row -->
          <v-form ref="form">

              <fileUploader @upload-images-chaned="uploadImageAttemt" :images="article.images">
              </fileUploader>


          <v-text-field label="Title" v-model="article.title"> </v-text-field>
            <v-text-field label="SubTitle" v-model="article.subtitle"> </v-text-field>
              <v-text-field label="Description" v-model="article.description"> </v-text-field>
          <v-text-field label="Tags" v-model="article.tags"> </v-text-field>
              <linksEditor @links-changed="updateLinks" :links="article.links"></linksEditor>
            <v-date-picker v-model="article.date" landscape> </v-date-picker>


          <v-btn @click="$emit('submission', article); article={}" class="green lighten-1 white--text">Submit</v-btn>
          <v-btn @click="$emit('closeAdd')" class="red white--text">Close</v-btn>
          </v-form>
        </v-card-text>
      </v-container>
    </v-card>

</template>

<script>

import fileUploader from "../components/fileUploader.vue"
import linksEditor from "../components/linksEditor.vue"

export default {
  data: () => ({
    article: {
      title: '',
      subtitle: '',
      tags: '',
      images: [],
        links: [],
        date: Date.now()
    }
  }),

  props: {
    rules: {
      type: Object
    }
  },
    components: {
        fileUploader: fileUploader,
        linksEditor: linksEditor
    },
    methods: {
        uploadImageAttemt(images){
            var me = this;
            me.article.images = images;
        },
        updateLinks(links){
            var me = this;
            me.article.links = links;
        }
    }

    }
</script>