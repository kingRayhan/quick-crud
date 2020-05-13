import * as mongoose from "mongoose";
/**
 * @typedef {import("mongoose").Model} MongooseModel
 */
/**
 * Create a document
 * @param {object} obj
 * @param {MongooseModel} obj.model - mongoose Model reference
 * @param {object} obj.data - An object of data to store in MongoDB based on Mongoose Schema
 *
 * @author KingRayhan <me@rayhan.info>
 */
declare const store: ({ model, data }: {
    model: mongoose.Model<any, {}>;
    data: any;
}) => Promise<any>;
export default store;
