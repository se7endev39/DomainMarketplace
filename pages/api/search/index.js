import Cart from 'models/cart'
import Domain from 'models/domain'
import connectDB from 'middleware/mongodb'

const user = "609a02061a2bd8cc3f2e95a2"

const handler = async (req, res) => {
  switch(req.method){
    case "GET":
      const { query } = req.query
      console.log("search", query)
      let regexp = new RegExp(`${query}`, "i")
      const result = await Domain.find({name: regexp}).lean()
      res.status(200).json(result)
      break;
  }
}

export default connectDB(handler)