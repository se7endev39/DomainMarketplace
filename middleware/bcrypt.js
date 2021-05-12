import bcrypt from 'bcrypt'

const salt = "$2b$10$k1SYjlCUJqSWdVt00nill."

const sign = (pwd) => bcrypt.hashSync(pwd, salt)

export default {sign}