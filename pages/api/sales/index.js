import Cart from 'models/cart'
import Domain from 'models/domain'
import connectDB from 'middleware/mongodb'


const handler = async (req, res) => {
  const user = req.payload.id
  switch(req.method){
    case "PUT":
      {
        const { domain, price, status } = req.body;
        const old_domain = await Domain.findOne({name: domain, user})
        if ( !old_domain ){
          res.status(200).json({type: "fail"})
          return
        }
        price && ( old_domain.price = price )
        status && ( old_domain.status = status )
        await old_domain.save()
        res.status(200).json({type: "success"})
        break;
      }
    case "GET":
      const sales_list = await Domain.find({user}).lean()
      res.status(200).json({type: "success", payload: sales_list })
      break;
    case "DELETE":
      {
        const { domain } = req.query;
        console.log('delete', domain, 'from cart')
        const result = await Cart.deleteOne({ domain, user })
        console.log('response', result)
        res.status(200).json({type: "success"})
        break;
      }
  }
}

export default connectDB(handler, "auth")