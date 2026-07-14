import mongoose from "mongoose";
import booking from "../../data/booking.js";

export async function add(newBooking) {
    return await booking.create(newBooking);
}

export async function cancel(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return null;
    }

    const objectId = new mongoose.Types.ObjectId(id);

    return await booking.findByIdAndUpdate(
        objectId,
        { status: "Cancelled" },
        { new: true }
    );
}