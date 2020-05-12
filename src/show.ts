import * as mongoose from "mongoose";

/**
 * Fetching single Resource
 * @param {object} obj
 * @param {MongooseModel} model - mongoose Model reference
 * @param {import("mongoose").QueryPopulateOptions} populateOption - Population schema properties seperated by space
 * @param {import("mongoose").FilterQuery} where - MongoDB filter object
 * @return {import("mongoose").Query} - return a single resource
 *
 * @author KingRayhan <me@rayhan.info>
 */
const show = ({
  model,
  where = {},
  populateOption,
}: {
  model: mongoose.Model<any>;
  where: mongoose.FilterQuery<any>;
  populateOption: mongoose.QueryPopulateOptions;
}) => {
  return model.findOne(where).populate(populateOption);
};
//: mongoose.Query<any>
export default show;
