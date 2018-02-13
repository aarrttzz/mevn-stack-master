//bring in the seperate models
const User = require('./user')
const Article = require('./article')
//import other models in the same manner

//export em in a good ol' bundle 
module.exports = {
    User,
    Article
}