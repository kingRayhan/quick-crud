import * as mongoose from "mongoose";
import { PaginationOptions } from "./utils/interfaces";
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
declare const index: ({ model, where, paginationOptions, populateOptions, }: {
    model: mongoose.Model<any, {}>;
    where?: mongoose.MongooseFilterQuery<any> | undefined;
    paginationOptions?: PaginationOptions | undefined;
    populateOptions?: mongoose.QueryPopulateOptions | undefined;
}) => Promise<{
    currentPage: number;
    pageCount: number;
    resourceCount: number;
    data: any;
}>;
export default index;
