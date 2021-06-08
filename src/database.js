const mongoose = require('mongoose');

const URI = 'mongodb+srv://sebasgarcia29:Uniminuto2019@cluster0.r2hio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(db => console.log('Mongo is conected'))
  .catch(err => console.log('Mongo is not conected'));


module.exports = mongoose;