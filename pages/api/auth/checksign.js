import User from 'models/user'
import connectDB from 'middleware/mongodb'
import bcrypt from 'middleware/bcrypt';
import jwt from 'middleware/jwt'

const handler = async (req, res) => {
  switch(req.method){
    case "POST":
      {
        if( !req.payload ){
          res.status(200).json({type: "fail", message: "no token"})
          return
        }
        //
        const { email } = req.payload;
        const user = await User.findOne({email})
        if (!user) {
          res.status(200).json({type: "fail", message: `${email} does not exist`})
          return
        }
        delete user.token
        const token = await jwt.sign( user )
        user.token = token
        await user.save()
        if(user)
          res.status(200).json({type: "success", payload: {user, token}})
        
        break;
      }
  }
}

export default connectDB(handler)