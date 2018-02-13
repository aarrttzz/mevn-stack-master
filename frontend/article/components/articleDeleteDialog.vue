<template>
  <v-card>
     <v-toolbar >
      <div class="headline">Delete Article Record {{tempArticle.title}}</div>
    </v-toolbar>

    <v-card-text>
      <p>This action will remove {{tempArticle.title}} from the application. This is
      <strong>irreversible.</strong>
      </p>
      <br>
      <h6> Are You Sure? </h6>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="$emit('deleted', tempArticle)" class="red darken-2 white--text">Confirm</v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="$emit('closeDelete')" class="green lighten-1 white--text">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tempArticle: {}
  }),

  props: {
    article: {
      type: Object
    }
  },

  mounted() {
    this.tempArticle = this.article
  }

}
</script>

<style>

</style>
