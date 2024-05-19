import CreateHotelRoomHandler from "@src/apis/create-hotel-room"
import DeleteHotelRoomHandler from "@src/apis/delete-hotel-room"
import GetHotelRoomDetailsHandler from "@src/apis/get-hotel-room-details"
import GetHotelRoomListHandler from "@src/apis/get-hotel-room-list"
import UpdateHotelRoomHandler from "@src/apis/update-hotel-room"
import express from "express"
const hotelRoomRoute = express.Router()

hotelRoomRoute.delete("/:roomId", DeleteHotelRoomHandler)
hotelRoomRoute.get("/:roomId", GetHotelRoomDetailsHandler)
hotelRoomRoute.put("/:roomId", UpdateHotelRoomHandler)
hotelRoomRoute.get("/", GetHotelRoomListHandler)
hotelRoomRoute.post("/", CreateHotelRoomHandler)

export default hotelRoomRoute
