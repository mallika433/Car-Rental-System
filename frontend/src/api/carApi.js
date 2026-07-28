import axios from 'axios'

const api = axios.create({
  baseURL: 'https://car-rental-system-j5kc.onrender.com/cars',
  withCredentials: true,
})

export const getCars = (date) => api.get('/', { params: date ? { date } : {} })

export const addNewCar = (newCar) => api.post('/', newCar)

export const updateCar = (carId, carDetails) => api.put(`/${carId}`, carDetails)

export const deleteCar = (carId) => api.delete(`/${carId}`)

export const getDashboard = () => api.get('/dashboard')
