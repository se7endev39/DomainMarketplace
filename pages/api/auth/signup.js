import User from 'models/user'
import connectDB from 'middleware/mongodb'
import bcrypt from 'middleware/bcrypt';

const handler = async (req, res) => {
  switch(req.method){
    case "POST":
      {
        const { email, password } = req.body;
        console.log("signup", email, password)
        const password_hash = await bcrypt.sign(password);
        
        const user_duplicate = await User.findOne({email}).lean()
        if(user_duplicate){
          res.status(200).jon({type: "fail", mssage: "Duplicate Email"})
          return
        }

        const user = new User({ email, password: password_hash });
        const user_created = await user.save();

        const token = "123123123"
        if(user_created)
          res.status(200).json({type: "success", payload: {user, token}})
        else
          res.status(200).json({type: "fail", message: "Unkown Error"})
        break;
      }
  }
}

export default connectDB(handler)