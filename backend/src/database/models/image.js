//import mongoose, our ODM for mongoDB
const mongoose = require('mongoose')
var Schema = mongoose.Schema;

//Define all of its fields, like columns of a SQL table
const definition = {
    guid: {
      type: String,
      required: true
    },
    base64: {
      type: String,
      required: true
    }
}

//Set any options for the schema
const options = {
  timestamps: true
}

//make the schema as a new instance of a mongoose schema, using our definition and options
const articleSchema = new mongoose.Schema(definition, options)

//export that boye
module.exports = mongoose.model('Image', articleSchema)