import jsonwebtoken from 'jsonwebtoken'
import { promisify } from 'util'

const salt = "$2b$10$k1SYjlCUJqSWdVt00nill."
const jwt = {
  sign: promisify(jsonwebtoken.sign),
  verify: promisify(jsonwebtoken.verify),
  decode: jsonwebtoken.decode,
}

const sign = async (data) => {
  console.log("token signing", data.email)
  const token = await jwt.sign({email: data.email}, process.env.jwt_secret, {
    expiresIn: process.env.expiresIn
  })
  return token
}

const decode = (token) => {
  const data = jwt.decode( token )
  return data
}

const verify = async (token) => {
  try{
    return await jwt.verify( token, process.env.jwt_secret )
  }catch(e){
    return false
  }
}

export default {sign, decode, verify}