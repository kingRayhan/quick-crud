import { Model, FilterQuery, QueryPopulateOptions } from 'mongoose'

/**
 * Fetching single Resource
 *
 * @param obj.model - Mongoose Model reference
 * @param obj.populateOptions - Mongoose population object/string
 * @param obj.where - MongoDB filter object
 *
 * @since 0.2.1
 * @author KingRayhan <me@rayhan.info>
 */
const show = ({
	model,
	where = {},
	populateOptions
}: {
	model: Model<any>
	where: FilterQuery<any>
	populateOptions?: QueryPopulateOptions
}) => {
	return model.findOne(where).populate(populateOptions)
}
export default show
