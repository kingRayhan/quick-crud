import * as mongoose from 'mongoose'
import { PaginationOptions } from './utils/interfaces'
import ResourceList from './utils/ResourceList'

/**
 * Fetching all Resources with pagination
 * @param options.Model - Mongoose Model reference
 * @param options.where - Mongoose filter object
 * @param options.paginationOptions - Resource PaginationOptions
 * @param populateOptions - Mongoose population object/string
 *
 * @since 0.2.1
 * @author KingRayhan <me@rayhan.info>
 */
const index = async ({
	model,
	where = {},
	paginationOptions,
	populateOptions
}: {
	model: mongoose.Model<any>
	where?: mongoose.MongooseFilterQuery<any>
	paginationOptions?: PaginationOptions
	populateOptions?: mongoose.QueryPopulateOptions
}) => {
	let query = model.find(where)
	if (populateOptions) query.populate(populateOptions)

	const resourceCount = await model.countDocuments(where)
	const pageCount =
		Math.ceil(resourceCount / (paginationOptions?.limit || 10)) || 1

	let dataHelper = new ResourceList(query, paginationOptions)
		.sortData()
		.limitedData()
		.pagination()
		.projections()

	let data = await dataHelper.getQuery()

	return {
		currentPage: dataHelper.getCurrentPage(),
		pageCount,
		resourceCount,
		data
	}
}

export default index
