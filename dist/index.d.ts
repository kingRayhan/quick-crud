import * as mongoose from 'mongoose';
import { PaginationOptions } from './utils/interfaces';
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
declare const index: ({ model, where, paginationOptions, populateOptions }: {
    model: mongoose.Model<any>;
    where?: any;
    paginationOptions?: PaginationOptions | undefined;
    populateOptions?: any;
}) => Promise<{
    currentPage: number;
    pageCount: number;
    resourceCount: number;
    data: any;
}>;
export default index;
