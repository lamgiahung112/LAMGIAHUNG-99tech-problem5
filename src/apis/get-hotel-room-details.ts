import { HotelRoomModel } from "@src/db/mongoose"
import ApiError from "@src/utils/api-error"
import HttpCode from "@src/utils/http-code"
import isStringValid from "@src/validators/string-validator"
import { Handler } from "express"

const GetHotelRoomDetailsHandler: Handler = async (req, res, next) => {
	try {
		const { roomId } = req.params

		if (!isStringValid(roomId as string)) {
			throw new ApiError("Invalid request format", HttpCode.BAD_REQUEST)
		}

		const room = await HotelRoomModel.findById(roomId)

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

export default GetHotelRoomDetailsHandler
