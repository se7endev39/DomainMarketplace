import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

mongoose.models = {};

var User = mongoose.models.User || mongoose.model('User', user);

export default User;