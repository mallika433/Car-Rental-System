import * as BookingModel from "../models/bookingModel.js";

export async function addBooking(req, res) {

    const newBooking = await BookingModel.add({
        ...req.body,
        status: "Booked"
    });

    return res.status(201).json({
        message: "Booking created",
        data: newBooking
    });
}

export async function cancelBooking(req, res) {

    const cancelledBooking = await BookingModel.cancel(req.params.id);

    if (!cancelledBooking) {
        return res.status(404).json({
            error: "Booking not found or invalid ID"
        });
    }

    return res.status(200).json({
        message: "Booking cancelled",
        data: cancelledBooking
    });
}