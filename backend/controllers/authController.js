import User from '../data/user.js'
import { login, register } from '../models/authModel.js'
import {
  clearAuthCookie,
  generateToken,
  setAuthCookie,
  verifyToken,
  COOKIE_NAME,
} from '../utils/auth.js'

function userPayload(user) {
  return {
    _id: user._id,
    email: user.email,
    name: user.name,
    role: user.role,
    isAdmin: user.isAdmin,
  }
}

export const registerUser = async (req, res) => {
  try {
    const registeredUser = await register(req.body)
    const token = generateToken(registeredUser)
    setAuthCookie(res, token)

    return res.status(201).json({
      data: userPayload(registeredUser),
      token,
    })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

export const loginUser = async (req, res) => {
  try {
    const loggedInUser = await login(req.body)
    const token = generateToken(loggedInUser)
    setAuthCookie(res, token)

    return res.status(200).json({
      data: userPayload(loggedInUser),
      token,
    })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

export const logoutUser = async (req, res) => {
  clearAuthCookie(res)
  return res.status(200).json({ data: { message: 'Logged out' } })
}

export const getMe = async (req, res) => {
  try {
    let token = req.cookies?.[COOKIE_NAME]
    if (!token && req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1]
    }

    if (!token) {
      return res.status(401).json({ error: 'You are not authenticated' })
    }

    const decoded = verifyToken(token)
    const user = await User.findById(decoded._id).select('-password')
    if (!user) {
      clearAuthCookie(res)
      return res.status(401).json({ error: 'User not found' })
    }

    return res.status(200).json({ data: userPayload(user) })
  } catch {
    clearAuthCookie(res)
    return res.status(401).json({ error: 'Invalid token' })
  }
}
