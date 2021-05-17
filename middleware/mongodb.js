import mongoose from 'mongoose';
import jwt from './jwt'

const connectDB = (handler, auth) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    const token = req.headers.authorization
    if( token ){
      const data = await jwt.verify( token )
      console.log("decoded", data)
      if( !data ){
        res.status( 401 ).send({
          type: "fail", 
          message: "token invalid"
        })
        return
      }
      req.payload = data
    }

    if( auth && !req.payload){
      res.status(200).json({type: "fail", message: "sign in first"})
      return;
    }
    
    return handler(req, res);
  }
  // Use new db connection
  console.log("mongodburl", process.env.mongodburl)
  await mongoose.connect(process.env.mongodburl, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true
  });
  return handler(req, res);
};

export default connectDB;