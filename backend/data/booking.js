import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    customerName: {
        type: String,
        required: true,
        trim: true
    },
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car",
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["Booked", "Cancelled"],
        default: "Booked"
    }
});

const booking = mongoose.model("Booking", bookingSchema, "bookings");

export default booking;