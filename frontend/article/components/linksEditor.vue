<template>
<div>

    <v-card style="margin-bottom:20px">

        <v-card-actions>
            <v-btn flat color="orange">Links Editor</v-btn>

            <v-btn fab dark small color="indigo" @click="removeLink">
                <v-icon dark>remove</v-icon>
            </v-btn>

            <v-btn fab dark small color="indigo" @click="addLink">
                <v-icon dark>add</v-icon>
            </v-btn>
        </v-card-actions>

        <v-layout row wrap v-for="(link, index) in links" v-bind:key="index">

            <v-flex xs6 style="padding: 10px">
                        <v-text-field label="Name" v-model="link.name" @change="linkChanged"> </v-text-field>
            </v-flex>

            <v-flex xs6 style="padding: 10px">
                        <v-text-field label="Url" v-model="link.url" @change="linkChanged"> </v-text-field>
            </v-flex>

        </v-layout>
    </v-card>
</div>
</template>


<script>

export default {

  name: 'links-editor',

  data: () => ({
    editLinks:[]
  }),

    props: ['links'],

    methods: {
        addLink: function(){
            var me = this;
            me.editLinks.push({
                name:'',
                url:''
            })
        },

        removeLink: function(){
            var me = this;
            me.editLinks.pop();
        },

        linkChanged: function(){
            var me = this;
            me.$emit('links-changed', me.editLinks)
        }
  },

   /* created() {
        console.log('link created')
        console.log(this.links)
        this.editLinks = this.links
    },*/
   // from popup
    mounted() {
        console.log('link mounted')
        console.log(this.links)
        this.editLinks = this.links
    },
    // inline
    updated() {
        console.log('link updated')
        console.log(this.links)
        this.editLinks = this.links
    },

    }
</script>