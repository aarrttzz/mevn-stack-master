//import the User constant explicitly
const { Article } = require('../database/models/index')

//show all users
exports.index = async (req, res) => {
  
  //query the DB of all users
  const articles = await Article.find().exec()

  //send the response
  res.json({ data: articles })

  return
}

//Store new article
exports.store = async (req, res) => {
  
  //create a new user object with the request body
  const article = new Article(req.body)

  //save it in the DB
  await article.save()

  //send a 201 and the new resource
  res.status(201).json({ data: article })
}

//this function is for looking at one user by their mongo id
exports.show = async (req, res) => {

  //find this sneaky boye
  const article = await Article.findById(req.params.id).exec()

  //send him back home
  res.json({ data: article })
}

//ever wanted to make the users disappear 
exports.delete = async (req, res) => {

  //find the sneaky boye and make him go away
  await Article.findByIdAndRemove(req.params.id).exec()

  //let em know there aint no content no mo
  res.status(204).json()
}

//edit a user based on ID
exports.update = async (req, res) => {
  const article = await Article
  .findByIdAndUpdate(req.params.id, req.body, { new: true })
  .exec()
res.json({ data: article })
}
