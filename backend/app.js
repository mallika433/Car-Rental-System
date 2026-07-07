import express from "express"
import cars from "./data/cars.js"

const app = express()
app.use(express.json())
const PORT = 3001

app.get("/cars", (req, res) => {
    return res.json(cars)
})

app.post("/cars", (req, res) => {
    const car = req.body
    cars.push(car)
    return res.status(201).json({"message": "Car added successfully"})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
