import DataHelper from './dataHelper'
import { removeUndefinedKeys } from './helpers'
import * as mongoose from 'mongoose'
import { PaginationOptions } from './interfaces'
import { QuickCrudException } from './QuickCrudError'

/**
 * Quick crud resource PaginationOptions
 * @typedef {object} PaginationOptions
 * @property {number} [page] - Pagination page number. Default is 1.
 * @property {number} [limit] - Resource count to show. Default is 10
 * @property {string} [sort] - MongoDB property sort key. Default is -createdAt
 */

/**
 * @typedef {import("mongoose").Model} MongooseModel
 */

/**
 * Create a document
 * @author KingRayhan <me@rayhan.info>
 * @param {MongooseModel} Model - mongoose Model reference
 * @param {object} data - An object of data to store in MongoDB based on Mongoose Schema
 */
export const store = (Model: mongoose.Model<any>, data: any): any => {
	return Model.create(data)
}

/**
 * Fetching all Resources
 * @author KingRayhan <me@rayhan.info>
 *
 * @param {MongooseModel} Model - mongoose Model reference
 * @param {PaginationOptions} paginationOptions - Search object
 * @param {string} populateOption - Population schema properties seperated by space
 * @return {object} - return resources
 */
export const index = async (
	Model: mongoose.Model<any>,
	populateOption: string,
	paginationOptions: PaginationOptions = {}
) => {
	let query = Model.find()
	if (populateOption) query.populate(populateOption)

	const resourceCount = await Model.estimatedDocumentCount()
	const pageCount =
		Math.ceil(resourceCount / (paginationOptions.limit || 10)) ?? 1

	let dataHelper = new DataHelper(query, paginationOptions)
		.sortData()
		.limitedData()
		.pagination()

	let data = await dataHelper.getQuery()

	return {
		currentPage: dataHelper.getCurrentPage(),
		pageCount,
		resourceCount,
		data
	}
}

/**
 * Fetching single Resource
 * @author KingRayhan <me@rayhan.info>
 *
 * @param {MongooseModel} Model - mongoose Model reference
 * @param {string} populateOption - Population schema properties seperated by space
 * @param {import("mongoose").FilterQuery} where - MongoDB filter object
 * @return {import("mongoose").Query} - return a single resource
 */
export const show = (
	Model: mongoose.Model<any>,
	where: mongoose.FilterQuery<any> = {},
	populateOption: string
): mongoose.Query<any> => {
	return Model.findOne(where).populate(populateOption)
}

/**
 * Update a Resource
 * @author KingRayhan <me@rayhan.info>
 *
 * @param {MongooseModel} Model - mongoose Model reference
 * @param {import("mongoose").FilterQuery} where - MongoDB filter object
 * @param {object} data - An object of data to update in MongoDB based on Mongoose Schema
 */
export const update = async (
	Model: mongoose.Model<any>,
	where: mongoose.FilterQuery<any> = {},
	data: any
): mongoose.Query<any> => {
	// check if it exists
	let doc = await Model.findOneAndUpdate(where, removeUndefinedKeys(data), {
		new: true
	})

	if (!doc) {
		throw new QuickCrudException('Resource not found')
	}
	// update that
	return doc
}

/**
 * Delete a Resource
 * @author KingRayhan <me@rayhan.info>
 *
 * @param {MongooseModel} Model - mongoose Model reference
 * @param {import("mongoose").FilterQuery} where - MongoDB filter object
 * @param {object} data - data object for delete
 */
export const destroy = async (
	Model: mongoose.Model<any>,
	where: mongoose.FilterQuery<any> = {}
) => {
	// check if it exists
	let doc = await Model.findOne(where)
	if (!doc) throw new QuickCrudException('Resource not found')

	await doc.delete()

	return doc
}
