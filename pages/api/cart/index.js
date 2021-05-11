import Cart from 'models/cart'
import connectDB from 'middleware/mongodb'

const handler = async (req, res) => {
  await connectDB()
  switch(req.method){
    case "POST":
      const { domain, price } = req.body;
      const new_cart = new Cart({ domain, price})
      await new_cart.save()
      res.status(200).json({type: "success"})
      break;
    case "GET":
      const cart_list = await Cart.find({})
      res.status(200).json(cart_list)
      break;
  }
}

export default connectDB(handler)