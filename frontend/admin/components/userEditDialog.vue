<template>
  <v-card>
    <v-toolbar>
      <div class="headline"> Edit User: {{editName}} </div>
    </v-toolbar>
    <v-container fluid>
      <v-card-text>

        <!-- Begin Input Row -->
        <v-form ref="form">
          <v-text-field label="Name" v-model="changedUser.name"> </v-text-field>
          <v-slider label="Age" v-model="changedUser.age" thumb-label step="1"></v-slider>
          <v-text-field label="Email" v-model="changedUser.email" :rules="[rules.email]"> </v-text-field>

          <v-btn @click="$emit('edited', changedUser)" class="green lighten-1 white--text">Submit</v-btn>
          <v-btn @click="$emit('closeEdit')" class="red white--text">Close</v-btn>
        </v-form>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    changedUser: {
      name: '',
      email: '',
      age: 0
    }

  }),

  props: {
    user: {
      type: Object
    },
    rules: {
      type: Object
    },
    editName: {
      type: String,
      default: ''
    }
  },

  created() {
    this.changedUser = this.user
  }

}
</script>

<style>

</style>
