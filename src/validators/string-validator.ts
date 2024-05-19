function isStringValid(...str: string[]) {
	return str.every(
		(indivStr) => indivStr && indivStr.length > 0 && indivStr.trim().length > 0
	)
}

export default isStringValid
