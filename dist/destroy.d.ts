import * as mongoose from "mongoose";
/**
 * Delete a Resource
 * @author KingRayhan <me@rayhan.info>
 * @param {object} obj
 * @param {MongooseModel} obj.model - mongoose Model reference
 * @param {import("mongoose").FilterQuery} obj.where - MongoDB filter object
 * @param {object} data - data object for delete
 */
declare const destroy: ({ model, where, }: {
    model: mongoose.Model<any, {}>;
    where: mongoose.MongooseFilterQuery<Pick<any, string | number | symbol>>;
}) => Promise<any>;
export default destroy;
