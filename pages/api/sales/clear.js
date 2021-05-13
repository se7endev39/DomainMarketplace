import Cart from 'models/cart'
import connectDB from 'middleware/mongodb'

const handler = async (req, res) => {
  await Cart.deleteMany({})
  res.status(200).json({type: "success"})
}

export default connectDB(handler)