import Domain from 'models/domain'
import connectDB from 'middleware/mongodb'


const handler = async (req, res) => {
  switch(req.method){
    case "GET":
      const domainList = await Domain.find({}).populate('user', 'email').sort([['user.name', 'asc']]).lean()
      res.status(200).json({type: "success", payload: domainList })
      break;
  }
}

export default connectDB(handler)