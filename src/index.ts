import * as mongoose from "mongoose";
import { PaginationOptions } from "./utils/interfaces";
import ResourceList from "./utils/ResourceList";

/**
 * @typedef {import("mongoose").Model} MongooseModel
 */

/**
 * Quick crud resource PaginationOptions
 * @typedef {object} PaginationOptions
 * @property {number} [page] - Pagination page number. Default is 1.
 * @property {number} [limit] - Resource count to show. Default is 10
 * @property {string} [sort] - MongoDB property sort key. Default is -createdAt
 */

/**
 * Fetching all Resources
 * @param {MongooseModel} Model - Mongoose Model reference
 * @param {object} where - Mongoose filter object
 * @param {PaginationOptions} paginationOptions - Resource PaginationOptions
 * @param {string} populateOptions - Population schema properties seperated by space
 * @return {object} - return resources
 *
 * @author KingRayhan <me@rayhan.info>
 */
const index = async ({
  model,
  where = {},
  paginationOptions,
  populateOptions,
}: {
  model: mongoose.Model<any>;
  where?: mongoose.MongooseFilterQuery<any>;
  paginationOptions?: PaginationOptions;
  populateOptions?: mongoose.QueryPopulateOptions;
}) => {
  let query = model.find(where);
  if (populateOptions) query.populate(populateOptions);

  const resourceCount = await model.countDocuments(where);
  const pageCount =
    Math.ceil(resourceCount / (paginationOptions?.limit || 10)) || 1;

  let dataHelper = new ResourceList(query, paginationOptions)
    .sortData()
    .limitedData()
    .pagination();

  let data = await dataHelper.getQuery();

  return {
    currentPage: dataHelper.getCurrentPage(),
    pageCount,
    resourceCount,
    data,
  };
};

export default index;
