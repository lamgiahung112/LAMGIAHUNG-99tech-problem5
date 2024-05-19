declare namespace Request {
	declare type PagingRequest = {
		page: number
		pageSize: number
	}

	declare type CreateHotelRoomRequest = {
		hotelName: string
		type: string
		reviewsCount: number
		rating: number
		city: string
		state: string
	}

	declare type UpdateHotelRoomRequest = {
		hotelName: string
		type: string
		city: string
		state: string
	}

	declare type GetHotelRoomListRequest = PagingRequest & {
		hotelName?: string
		type?: string
		city?: string
		state?: string
	}
}
