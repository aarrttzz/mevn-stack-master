//import mongoose, our ODM for mongoDB
const mongoose = require('mongoose')
var Schema = mongoose.Schema;

//Define all of its fields, like columns of a SQL table
const definition = {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    description: {
        type: String,
    },
    tags: {
      type: String,
    },
    links: {
      type :[Schema.Types.Mixed]
    },
    images: {
        type :[String]
    },
    date:{
        type: String
    }

}

//Set any options for the schema
const options = {
  timestamps: true
}

//make the schema as a new instance of a mongoose schema, using our definition and options
const articleSchema = new mongoose.Schema(definition, options)

//export that boye
module.exports = mongoose.model('Article', articleSchema)