import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var domain = new Schema({
  name: {
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
  },
  status: {
    type: String,
    enum: ["Available", "Protected", "Taken", "Unavailable"]
  }
});

var Domain = mongoose.models.Domain || mongoose.model('Domain', domain);

export default Domain;