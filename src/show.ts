import * as mongoose from "mongoose";

/**
 * Fetching single Resource
 * @param {object} obj
 * @param {MongooseModel} model - mongoose Model reference
 * @param {import("mongoose").QueryPopulateOptions} populateOptions - Population schema properties seperated by space
 * @param {import("mongoose").FilterQuery} where - MongoDB filter object
 * @return {import("mongoose").Query} - return a single resource
 *
 * @author KingRayhan <me@rayhan.info>
 */
const show = ({
  model,
  where = {},
  populateOptions,
}: {
  model: mongoose.Model<any>;
  where: mongoose.FilterQuery<any>;
  populateOptions?: mongoose.QueryPopulateOptions;
}) => {
  return model.findOne(where).populate(populateOptions);
};
//: mongoose.Query<any>
export default show;
