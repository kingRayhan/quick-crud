import * as mongoose from 'mongoose'
import { QuickCrudException } from './utils/QuickCrudError'

/**
 * Delete a Resource
 * @author KingRayhan <me@rayhan.info>
 *
 * @param {MongooseModel} Model - mongoose Model reference
 * @param {import("mongoose").FilterQuery} where - MongoDB filter object
 * @param {object} data - data object for delete
 */
const destroy = async (
	Model: mongoose.Model<any>,
	where: mongoose.FilterQuery<any> = {}
) => {
	// check if it exists
	let doc = await Model.findOne(where)
	if (!doc) throw new QuickCrudException('Resource not found')

	await doc.delete()

	return doc
}

export default destroy
