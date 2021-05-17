import User from 'models/user'
import connectDB from 'middleware/mongodb'
import bcrypt from 'middleware/bcrypt';
import jwt from 'middleware/jwt'

const handler = async (req, res) => {
  switch(req.method){
    case "POST":
      {
        const { email, password } = req.body;
        if(!email || !password){
          res.status(200).json({type: "fail", message: "Wrong password or email"})
          return
        }
        const password_hash = await bcrypt.sign(password);
        const user = await User.findOne({email, password:password_hash})
        if(!user){
          res.status(200).json({type: "fail", message: "Wrong password or email"})
          return
        }
        const token = await jwt.sign( user )
        user.token = token
        await user.save()
        res.status(200).json({type: "success", payload: {user, token}})
        break;
      }
  }
}

export default connectDB(handler)