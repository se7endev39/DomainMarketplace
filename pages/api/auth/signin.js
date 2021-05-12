import User from 'models/user'
import connectDB from 'middleware/mongodb'
import bcrypt from 'middleware/bcrypt';

const handler = async (req, res) => {
  switch(req.method){
    case "POST":
      {
        const { email, password } = req.body;
        const password_hash = await bcrypt.sign(password);
        const user = await User.findOne({email, password:password_hash}).lean()
        const token = "123123123"
        if(user)
          res.status(200).json({type: "success", payload: {user, token}})
        else
          res.status(200).json({type: "fail", message: "Wrong password or email"})
        break;
      }
  }
}

export default connectDB(handler)