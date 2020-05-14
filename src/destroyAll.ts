import { Model, FilterQuery } from 'mongoose'

/**
 * Deletes all documents that matches `where` from the collection.
 * @param obj.model  Mongoose Model reference
 * @param obj.where  MongoDB filter object
 *
 * @since 0.2.1
 * @author KingRayhan <me@rayhan.info>
 */
const destroyAll = ({
	model,
	where = {}
}: {
	model: Model<any>
	where: FilterQuery<any>
}) => {
	return model.deleteMany(where)
}

export default destroyAll
