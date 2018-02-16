<template>
<div>
    <v-btn flat color="orange" @click="clearInputForm" >Reset Files</v-btn>
    <input @change="handleFileSelect" type="file" name="files[]" multiple />
    <br> <br>
    <span v-for="img in images">
         <img width="100" class="thumb" v-bind:src="url+img" style="margin-left: 5px"/>
    </span>
</div>
</template>


<script>
import url from '../../httpConfig'

export default {

  data: () => ({
    editImages:[],
      url :  url + '/images/'
  }),
    props: ['images'],
    methods: {

        clearInputForm(){
            var me = this;
            me.editImages = [];
            me.$emit('upload-images-chaned', me.editImages);
        },

        handleFileSelect(evt) {
            var me = this;
            me.url = '';

            var files = evt.target.files; // FileList object

            // Loop through the FileList and render image files as thumbnails.
            for (var i = 0, f; f = files[i]; i++) {
                // Only process image files.
                if (!f.type.match('image.*')) {
                    continue;
                }
                var reader = new FileReader();
                // Closure to capture the file information.
                reader.onload = (function(theFile) {
                    return function(e) {
                        me.editImages.push(e.target.result);
                        me.$emit('upload-images-chaned', me.editImages);
                    };
                })(f);
                // Read in the image file as a data URL.
                reader.readAsDataURL(f);
            }
        },
  },

    }
</script>