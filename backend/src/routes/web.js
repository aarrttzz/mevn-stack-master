//Here is where we declare the modules and shit we will need
const express = require('express')

//set up the router
const router = express.Router()

//send back the index.html containing the Vue Application
router.get('/', (req, res) => {
var p =path.join(__dirname + '../../public/index.html');
console.log(p);
  res.sendFile(path.join(__dirname + '../../public/index.html'))
})

module.exports = router