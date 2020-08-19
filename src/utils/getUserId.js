import jwt from 'jsonwebtoken'

const getUserId = (request, requireAuth = true) => {
  const header = request.request ? request.request.headers.authorization : request.connection.context.Authorization

  if (header) {
    const token = header.replace('Bearer ', '')
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    return decodedToken.userId
  }

  if (requireAuth) {
    throw new Error('Authentication required.')
  }

  return null
}

export default getUserId
