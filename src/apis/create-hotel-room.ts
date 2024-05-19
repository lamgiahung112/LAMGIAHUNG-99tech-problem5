import { HotelRoomModel } from "@src/db/mongoose"
import ApiError from "@src/utils/api-error"
import HttpCode from "@src/utils/http-code"
import isNumberValid from "@src/validators/number-validator"
import isStringValid from "@src/validators/string-validator"
import { Handler } from "express"

const CreateHotelRoomHandler: Handler = async (req, res, next) => {
	try {
		const body = req.body as Request.CreateHotelRoomRequest

		if (!isStringValid(body.city, body.hotelName, body.state, body.type)) {
			throw new ApiError("Invalid data format", HttpCode.BAD_REQUEST)
		}
		if (!isNumberValid(body.rating, body.reviewsCount)) {
			throw new ApiError("Invalid data format", HttpCode.BAD_REQUEST)
		}

		const createdHotelRoom = new HotelRoomModel({
			...body,
		})
		await createdHotelRoom.save()

		res.locals = {
			payload: createdHotelRoom,
		}
		next()
	} catch (error) {
		next(error)
	}
}

export default CreateHotelRoomHandler
