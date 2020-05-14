import { Model, QueryPopulateOptions } from 'mongoose';
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
declare const show: ({ model, where, populateOptions }: {
    model: Model<any, {}>;
    where: import("mongoose").MongooseFilterQuery<Pick<any, string | number | symbol>>;
    populateOptions?: QueryPopulateOptions | undefined;
}) => import("mongoose").DocumentQuery<any, any, {}>;
export default show;
