import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var cart = new Schema({
  domain: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

export default mongoose.models.Cart || mongoose.model('Cart', cart)
