/*
 * This file is used to build the API routes, we may have 
 * different routes for views and the like
 */

const express = require('express')

const userRoutes = require('./users') //use the user route shit
const articleRoutes = require('./articles')
const imageRoutes = require('./images')

const router = express.Router() //make a new router

router.use('/users', userRoutes) //tell it to use the userRoutes
router.use('/articles', articleRoutes) //tell it to use the userRoutes
router.use('/images', imageRoutes) //tell it to use the userRoutes

module.exports = router