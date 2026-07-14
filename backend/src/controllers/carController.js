import * as CarModel from "../models/carModel.js";

export async function getCars(req, res) {
    const cars = await CarModel.getAll();

    return res.status(200).json(cars);
}

export async function addCar(req, res) {
    const newCar = await CarModel.add(req.body);

    return res.status(201).json({
        message: "Car added successfully",
        data: newCar
    });
}

export async function updateCar(req, res) {
    const updatedCar = await CarModel.update(req.params.id, req.body);

    if (!updatedCar) {
        return res.status(404).json({
            error: "Car not found or invalid ID"
        });
    }

    return res.status(200).json({
        message: "Car updated successfully",
        data: updatedCar
    });
}

export async function deleteCar(req, res) {
    const deletedCar = await CarModel.del(req.params.id);

    if (!deletedCar) {
        return res.status(404).json({
            error: "Car not found or invalid ID"
        });
    }

    return res.status(200).json({
        message: "Car deleted successfully"
    });
}