import axios from 'axios'

const api = axios.create({
  baseURL: 'https://car-rental-system-j5kc.onrender.com/bookings',
  withCredentials: true,
})

export const getBookings = () => api.get('/')

export const addBooking = (bookingData) => api.post('/', bookingData)

export const cancelBooking = (bookingId) => api.put(`/${bookingId}/cancel`)
