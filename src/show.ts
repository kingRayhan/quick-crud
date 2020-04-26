import * as mongoose from 'mongoose'

/**
 * Fetching single Resource
 *
 * @param {MongooseModel} Model - mongoose Model reference
 * @param {string} populateOption - Population schema properties seperated by space
 * @param {import("mongoose").FilterQuery} where - MongoDB filter object
 * @return {import("mongoose").Query} - return a single resource
 *
 * @author KingRayhan <me@rayhan.info>
 */
const show = (
	Model: mongoose.Model<any>,
	where: mongoose.FilterQuery<any> = {},
	populateOption: string
): mongoose.Query<any> => {
	return Model.findOne(where).populate(populateOption)
}

export default show
