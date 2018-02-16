//import the User constant explicitly
const { Image } = require('../database/models/index')

//show all images
exports.index = async (req, res) => {
  
  //query the DB of all users
  const images = await Image.find().exec()

  //send the response
  res.json({ data: images })

  return
}

//Store new image
exports.store = async (req, res) => {
  
  //create a new user object with the request body
  const image = new Image(req.body)

  //save it in the DB
  await image.save()

  //send a 201 and the new resource
  res.status(201).json({ data: image })
}

function decodeBase64Image(dataString)
{
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var response = {};

    if (matches.length !== 3)
    {
        return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
}

//this function is for looking at one user by their mongo id
exports.show = async (req, res) => {

  //find this sneaky boye
  const image = await Image.findById(req.params.id).exec()

  //send him back home
  //res.json({ data: image })

    var imageBuffer = decodeBase64Image(image.base64);

   // var base64Data = image.base64;//.replace(/^data:image\/jpeg;base64,/, "");
    res.contentType('image/jpeg')
    res.send(imageBuffer.data);

}

//ever wanted to make the users disappear 
exports.delete = async (req, res) => {

  //find the sneaky boye and make him go away
  await Image.findByIdAndRemove(req.params.id).exec()

  //let em know there aint no content no mo
  res.status(204).json()
}

//edit a user based on ID
exports.update = async (req, res) => {
  const image = await Image
  .findByIdAndUpdate(req.params.id, req.body, { new: true })
  .exec()
res.json({ data: image })
}
