import { FilterQuery, Model, PopulateOptions } from "mongoose";
import { PaginationOptions } from "./utils/interfaces";
import ResourceList from "./utils/ResourceList";

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
const index = async <ModelType>({
  model,
  where = {},
  paginationOptions,
  populateOptions,
}: {
  model: Model<ModelType>;
  where?: FilterQuery<ModelType>;
  paginationOptions?: PaginationOptions;
  populateOptions?: PopulateOptions;
}) => {
  let query = model.find(where);
  if (populateOptions) query.populate(populateOptions);

  const resourceCount = await model.countDocuments(where);
  const pageCount =
    Math.ceil(resourceCount / (paginationOptions?.limit || 10)) || 1;

  let dataHelper = new ResourceList(query, paginationOptions)
    .sortData()
    .limitedData()
    .pagination();

  let data = await dataHelper.getQuery();

  return {
    currentPage: dataHelper.getCurrentPage(),
    pageCount,
    resourceCount,
    data,
  };
};

export default index;
