//import the User constant explicitly
const { Article } = require('../database/models/index')
const { Image } = require('../database/models/index')
const uuidv4 = require('uuid/v4');

function createArticle(body){
    //create a new user object with the request body
    var article = new Article(body)
    var imagesGuids = [];
    article.images.forEach(articleImage => {
        var img = new Image({
            guid: uuidv4(),
            base64: articleImage
        });
        imagesGuids.push(img._id);
        img.save();
    });
    article.images = imagesGuids;

    //save it in the DB
    article.save()
}

//show all users
exports.index = async (req, res) => {
  
  //query the DB of all users
  const articles = await Article.find().sort('-date').exec()

  //send the response
  res.json({ data: articles })

  return
}

//Store new article
exports.store = async (req, res) => {

    var article = new Article(req.body)
    var imagesGuids = [];

    if (article.images)
    article.images.forEach(articleImage => {
        var img = new Image({
            guid: uuidv4(),
            base64: articleImage
        });
        imagesGuids.push(img._id);
        img.save();
    });
    article.images = imagesGuids;

    //save it in the DB
    article.save()

  //send a 201 and the new resource
  res.status(201).json({ data: article })
}

//this function is for looking at one article by their mongo id
exports.show = async (req, res) => {
  var imgBuf = [];
  //find this sneaky boye
  var article = await Article.findById(req.params.id).exec();
    if (article.images)
    article.images.forEach(articleImage => {
        var img  = Image.findById(articleImage).exec();
        if(img)
          imgBuf.push(img.base64)
    });
    article.images = imgBuf;
  //send him back home
  res.json({ data: article })
}

//ever wanted to make the users disappear 
exports.delete = async (req, res) => {

    const article =  await Article.findById(req.params.id).exec()

    if (article.images)
    article.images.forEach(articleImage => {
        Image.findByIdAndRemove(articleImage).exec();
    });
    //find the sneaky boye and make him go away
    Article.findByIdAndRemove(req.params.id).exec();


  res.status(204).json()
}

//edit a user based on ID
exports.update = async (req, res) => {

    var dbArticle =  await Article.findById(req.params.id).exec();
    var newArticle = new Article(req.body);
    var imagesGuids = [];

    var needRemove = false;
    newArticle.images.forEach(articleImage => {
        if (articleImage.indexOf('base64')!=-1){
            needRemove = true;
            var img = new Image({
                guid: uuidv4(),
                base64: articleImage
            });
            imagesGuids.push(img._id);
            img.save();
        }else{
            imagesGuids.push(articleImage);
        }
    });

    if (needRemove)
        dbArticle.images.forEach(articleImage => {
                Image.findByIdAndRemove(articleImage).exec();
        });

    newArticle.images = imagesGuids;


  const article = await Article
  .findByIdAndUpdate(req.params.id, newArticle, { new: true })
  .exec()
res.json({ data: article })
}
