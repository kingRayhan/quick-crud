import { Model } from 'mongoose';
/**
 * Deletes all documents that matches `where` from the collection.
 * @param {object} obj Quick Crud options
 * @param obj.model  Mongoose Model reference
 * @param obj.where  MongoDB filter object
 *
 * @since 0.2.1
 * @author KingRayhan <me@rayhan.info>
 */
declare const destroyAll: ({ model, where }: {
    model: Model<any, {}>;
    where: import("mongoose").MongooseFilterQuery<Pick<any, string | number | symbol>>;
}) => import("mongoose").Query<{
    ok?: number | undefined;
    n?: number | undefined;
} & {
    deletedCount?: number | undefined;
}>;
export default destroyAll;
