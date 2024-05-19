// Import mongoose
import mongoose, { Schema, Document } from "mongoose"

// Define interface for mongoose documents
interface IHotelRoom extends HotelRoom, Document {}

// Define mongoose schemas
const HotelRoomSchema: Schema = new Schema({
	hotelName: String,
	reviewsCount: Number,
	type: String,
	rating: Number,
	city: String,
	state: String,
})

// Create mongoose models
const HotelRoomModel = mongoose.model<IHotelRoom>("HotelRooms", HotelRoomSchema)

export { HotelRoomModel }
