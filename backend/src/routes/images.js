//Here is where we declare the modules and shit we will need
const express = require('express')

//import the controllers and middleware
const { imagesController } = require('../controllers/index')
const { catchErrors } = require('../middleware/error-handler')

//set up the router
const router = express.Router()

//get all users
router.get('/', catchErrors(imagesController.index))

//make a new boy
router.post('/', catchErrors(imagesController.store))

//see one boy
router.get('/:id', catchErrors(imagesController.show))

//get rid of a boy
router.delete('/:id', catchErrors(imagesController.delete))

//update a boy
router.put('/:id', catchErrors(imagesController.update))

module.exports = router