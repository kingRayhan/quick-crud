import * as mongoose from 'mongoose'

/**
 * Delete all documents that matches where keys
 * @author KingRayhan <me@rayhan.info>
 *
 * @param {MongooseModel} Model - mongoose Model reference
 * @param {import("mongoose").FilterQuery} where - MongoDB filter object
 */
const destroyAll = ( {model, where = {}} : {
	model: mongoose.Model<any>,
	where: mongoose.FilterQuery<any> 
}) => {
	return model.deleteMany(where)
}

export default destroyAll
