import * as mongoose from 'mongoose';
/**
 * Updates the first document that matches where
 * `data` is the object where you want to update the data.
 *
 * @param obj.model - Mongoose Model reference
 * @param obj.where - MongoDB filter object
 * @param obj.data - An object of data to update that matches with where filter key(s)
 *
 * @since 0.2.1
 * @author KingRayhan <me@rayhan.info>
 */
declare const update: ({ model, where, data }: {
    model: mongoose.Model<any>;
    where: mongoose.FilterQuery<any>;
    data: any;
}) => any;
export default update;
