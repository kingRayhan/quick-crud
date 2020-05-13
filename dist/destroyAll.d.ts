import * as mongoose from 'mongoose';
/**
 * Delete all documents that matches where keys
 * @author KingRayhan <me@rayhan.info>
 *
 * @param {MongooseModel} Model - mongoose Model reference
 * @param {import("mongoose").FilterQuery} where - MongoDB filter object
 */
declare const destroyAll: ({ model, where }: {
    model: mongoose.Model<any, {}>;
    where: mongoose.MongooseFilterQuery<Pick<any, string | number | symbol>>;
}) => mongoose.Query<{
    ok?: number | undefined;
    n?: number | undefined;
} & {
    deletedCount?: number | undefined;
}>;
export default destroyAll;
