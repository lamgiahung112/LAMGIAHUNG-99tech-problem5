import { HotelRoomModel } from "@src/db/mongoose"
import ApiError from "@src/utils/api-error"
import HttpCode from "@src/utils/http-code"
import isStringValid from "@src/validators/string-validator"
import { Handler } from "express"

const UpdateHotelRoomHandler: Handler = async (req, res, next) => {
	try {
		const { roomId } = req.params
		const body = req.body as Request.UpdateHotelRoomRequest

		if (!isStringValid(roomId as string)) {
			throw new ApiError("Invalid request format", HttpCode.BAD_REQUEST)
		}

		const room = await HotelRoomModel.findByIdAndUpdate(roomId, {
			hotelName: isStringValid(body.hotelName) ? body.hotelName : undefined,
			type: isStringValid(body.type) ? body.type : undefined,
			city: isStringValid(body.city) ? body.city : undefined,
			state: isStringValid(body.state) ? body.state : undefined,
		})

		if (room === null) {
			throw new ApiError("Room not found", HttpCode.NOT_FOUND)
		}

		res.locals = {
			payload: room,
		}
		next()
	} catch (error) {
		next(error)
	}
}

export default UpdateHotelRoomHandler
