import { Document, Model, FilterQuery } from 'mongoose'
import { QuickCrudException } from './utils/QuickCrudError'

/**
 * Deletes the first documents that matches where from the collection.
 * it returns the document that has been deleted.
 *
 * @param obj.model  Mongoose Model reference
 * @param obj.where  MongoDB filter object
 *
 * @since 0.2.1
 * @author KingRayhan <me@rayhan.info>
 */
const destroy = async (obj: {
	model: Model<any>
	where: FilterQuery<any>
}): Promise<Document> => {
	let { model, where } = obj

	// check if it exists
	let doc = await model.findOne(where)
	if (!doc) throw new QuickCrudException('Resource not found')
	await doc.delete()
	return doc
}

export default destroy
