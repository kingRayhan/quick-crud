import * as mongoose from "mongoose";
/**
 * Update a Resource
 * @param {MongooseModel} Model - mongoose Model reference
 * @param {import("mongoose").FilterQuery} where - MongoDB filter object
 * @param {object} data - An object of data to update in MongoDB based on Mongoose Schema
 * @author KingRayhan <me@rayhan.info>
 */
declare const update: ({ model, where, data, }: {
    model: mongoose.Model<any, {}>;
    where: mongoose.MongooseFilterQuery<Pick<any, string | number | symbol>>;
    data: any;
}) => mongoose.Query<any>;
export default update;
