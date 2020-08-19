import jwt from 'jsonwebtoken'

const generateToken = (userId) => jwt.sign({ userId }, 'thisisasecret', { expiresIn: '7d' })

export default generateToken
