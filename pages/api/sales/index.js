import Cart from 'models/cart'
import Domain from 'models/domain'
import connectDB from 'middleware/mongodb'

const user = "609a02061a2bd8cc3f2e95a2"

const handler = async (req, res) => {
  switch(req.method){
    case "PUT":
      {
        const { domain, price } = req.body;
        const old_domain = await Domain.findOne({name: domain})
        if ( !old_domain ){
          res.status(200).json({type: "fail"})
          return
        }
        old_domain.price = price
        await old_domain.save()
        res.status(200).json({type: "success"})
        break;
      }
    case "GET":
      const sales_list = await Domain.find({status: "Taken"}).lean()
      res.status(200).json(sales_list)
      break;
    case "DELETE":
      {
        const { domain } = req.query;
        console.log('delete', domain, 'from cart')
        const result = await Cart.deleteOne({ domain })
        console.log('response', result)
        res.status(200).json({type: "success"})
        break;
      }
  }
}

export default connectDB(handler)