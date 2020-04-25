export const removeUndefinedKeys = (obj: any): any => {
	let shallowCopyObj = { ...obj }

	Object.keys(shallowCopyObj).forEach((key) => {
		if (!shallowCopyObj[key]) delete shallowCopyObj[key]
	})

	return shallowCopyObj
}
