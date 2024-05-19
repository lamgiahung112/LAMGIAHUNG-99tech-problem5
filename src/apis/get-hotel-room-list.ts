import { HotelRoomModel } from "@src/db/mongoose"
import ApiError from "@src/utils/api-error"
import HttpCode from "@src/utils/http-code"
import isNumberValid from "@src/validators/number-validator"
import isStringValid from "@src/validators/string-validator"
import { Handler } from "express"
import { PipelineStage } from "mongoose"

const GetHotelRoomListHandler: Handler = async (req, res, next) => {
	try {
		const { hotelName, type, city, state, page, pageSize } =
			req.query as unknown as Request.GetHotelRoomListRequest

		if (!isNumberValid(page, pageSize)) {
			throw new ApiError("Invalid request format", HttpCode.BAD_REQUEST)
		}

		const queryPipleline: PipelineStage[] = [
			{
				$match: {
					hotelName: new RegExp(hotelName ? hotelName : "", "i"),
					type: new RegExp(type ? type : "", "i"),
					city: new RegExp(city ? city : "", "i"),
					state: new RegExp(state ? state : "", "i"),
				},
			},
			{
				$skip: (page - 1) * pageSize,
			},
			{
				$limit: +pageSize,
			},
		]
		const roomList = await HotelRoomModel.aggregate(queryPipleline).exec()

		res.locals = {
			payload: roomList,
		}
		next()
	} catch (error) {
		next(error)
	}
}

export default GetHotelRoomListHandler
