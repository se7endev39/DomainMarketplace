import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var sale = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  fee: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: (new Date)
  }
});

var Sale = mongoose.models.Sale || mongoose.model('Sale', sale);

export default Sale;