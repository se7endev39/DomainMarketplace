import Cart from 'models/cart'


const db_fake = [
  {
    domain: "cart.metrix",
    price: "50"
  },
  {
    domain: "cart.admin",
    price: "300"
  },
  {
    domain: "cart.media",
    price: "50"
  },
  {
    domain: "test.metrix",
    price: "50"
  },
]

export default async function handler(req, res) {
  switch(req.methodd){
    case "POST":
      break;
    case "GET":
      // const cart_list = await Cart.find({})
      break;
  }
  
  res.status(200).json(db_fake)
}