import * as mongoose from 'mongoose'

/**
 * @typedef {import("mongoose").Model} MongooseModel
 */

/**
 * Create a document
 * @param {MongooseModel} Model - mongoose Model reference
 * @param {object} data - An object of data to store in MongoDB based on Mongoose Schema
 *
 * @author KingRayhan <me@rayhan.info>
 */
const store = (Model: mongoose.Model<any>, data: any): any => {
	return Model.create(data)
}

export default store
