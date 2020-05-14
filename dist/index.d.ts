import * as mongoose from 'mongoose';
import { PaginationOptions } from './utils/interfaces';
/**
 * Fetching all Resources
 * @param options.Model - Mongoose Model reference
 * @param options.where - Mongoose filter object
 * @param options.paginationOptions - Resource PaginationOptions
 * @param populateOptions - Mongoose population object/string
 *
 * @author KingRayhan <me@rayhan.info>
 */
declare const index: ({ model, where, paginationOptions, populateOptions }: {
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
