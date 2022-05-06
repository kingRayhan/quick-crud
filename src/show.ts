import { Model, FilterQuery, PopulateOptions } from "mongoose";

/**
 * Fetching single Resource
 *
 * @param obj.model - Mongoose Model reference
 * @param obj.PopulateOptions - Mongoose population object/string
 * @param obj.where - MongoDB filter object
 *
 * @since 0.2.1
 * @author KingRayhan <me@rayhan.info>
 */
const show = <ModelType>({
  model,
  where = {},
  populateOptions,
}: {
  model: Model<ModelType>;
  where: FilterQuery<ModelType>;
  populateOptions?: PopulateOptions;
}) => {
  const query = model.findOne(where);
  if (populateOptions) query.populate<ModelType>(populateOptions);
};
export default show;
