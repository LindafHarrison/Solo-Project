const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pictureSchema = new Schema({
  name: String,
  imgUrl: String,
  createdAt: {type:Date, default: Date.now()},
});


const Picture = mongoose.model('Picture', pictureSchema);

module.exports = Picture;