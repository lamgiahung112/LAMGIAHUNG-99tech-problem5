import { Application } from "express"
import hotelRoomRoute from "./hotel-room-route"

export default function initRoute(app: Application) {
	app.use("/api/room", hotelRoomRoute)
}
