import { Query, Model, FilterQuery } from "mongoose";
import { removeUndefinedKeys } from "./utils/helpers";
import { QuickCrudException } from "./utils/QuickCrudError";

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
const update = async <ModelType>({
  model,
  where,
  data,
}: {
  model: Model<ModelType>;
  where: FilterQuery<ModelType>;
  data: any;
}): Query<ModelType, ModelType> => {
  // check if it exists
  data = removeUndefinedKeys(data);

  let doc = await model.findOneAndUpdate(where, data, {
    new: true,
  });

  if (!doc) {
    throw new QuickCrudException("Resource not found");
  }
  // update that
  return doc;
};

export default update;
