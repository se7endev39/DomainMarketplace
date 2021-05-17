import User from 'models/user'
import connectDB from 'middleware/mongodb'
import bcrypt from 'middleware/bcrypt';
import jwt from 'middleware/jwt'

const handler = async (req, res) => {
  switch(req.method){
    case "POST":
      {
        if(!req.payload){          
          res.status(200).json({type: "fail", message: "No token"})
          return
        }
        const email = req.payload.email
        const user = await User.findOne({email})
        if(!user){
          res.status(200).json({type: "fail", message: "No email"})
          return
        }
        delete user.token
        await user.save()
        res.status(200).json({type: "success"})
        break;
      }
  }
}

export default connectDB(handler)