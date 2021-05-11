import Cart from 'models/cart'
import connectDB from 'middleware/mongodb'

const user = "609a02061a2bd8cc3f2e95a2"

const handler = async (req, res) => {
  switch(req.method){
    case "POST":
      {
        const { domain, price } = req.body;
        const new_cart = new Cart({ domain, price, user })
        await new_cart.save()
        res.status(200).json({type: "success"})
        break;
      }
    case "GET":
      const cart_list = await Cart.find({})
      res.status(200).json(cart_list)
      break;
    case "DELETE":
      {
        const { domain } = req.query;
        console.log('delete', domain, 'from cart')
        await Cart.deleteOne({ domain })
        res.status(200).json({type: "success"})
        break;
      }
  }
}

export default connectDB(handler)