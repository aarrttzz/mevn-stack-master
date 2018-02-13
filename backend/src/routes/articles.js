//Here is where we declare the modules and shit we will need
const express = require('express')

//import the controllers and middleware
const { articlesController } = require('../controllers/index')
const { catchErrors } = require('../middleware/error-handler')

//set up the router
const router = express.Router()

//get all users
router.get('/', catchErrors(articlesController.index))

//make a new boy
router.post('/', catchErrors(articlesController.store))

//see one boy
router.get('/:id', catchErrors(articlesController.show))

//get rid of a boy
router.delete('/:id', catchErrors(articlesController.delete))

//update a boy
router.put('/:id', catchErrors(articlesController.update))

module.exports = router