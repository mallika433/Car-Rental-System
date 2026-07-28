import axios from 'axios'

const api = axios.create({
  baseURL: 'https://car-rental-system-j5kc.onrender.com/auth',
  withCredentials: true,
})

export const registerUser = (user) => api.post('/register', user)

export const loginUser = (user) => api.post('/login', user)

export const logoutUser = () => api.post('/logout')

export const getMe = () => api.get('/me')
