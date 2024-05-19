function isNumberValid(...nums: number[]) {
	return nums.every((num) => num !== null && num !== undefined)
}

export default isNumberValid
