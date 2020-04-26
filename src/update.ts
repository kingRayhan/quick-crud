import * as mongoose from 'mongoose'
import { removeUndefinedKeys } from './utils/helpers'
import { QuickCrudException } from './utils/QuickCrudError'

/**
 * Update a Resource
 * @param {MongooseModel} Model - mongoose Model reference
 * @param {import("mongoose").FilterQuery} where - MongoDB filter object
 * @param {object} data - An object of data to update in MongoDB based on Mongoose Schema
 * @author KingRayhan <me@rayhan.info>
 */
const update = async (
	Model: mongoose.Model<any>,
	where: mongoose.FilterQuery<any> = {},
	data: any
): mongoose.Query<any> => {
	// check if it exists
	data = removeUndefinedKeys(data)

	let doc = await Model.findOneAndUpdate(where, data, {
		new: true
	})

	if (!doc) {
		throw new QuickCrudException('Resource not found')
	}
	// update that
	return doc
}

export default update
