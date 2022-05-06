import { Document, Model, FilterQuery } from 'mongoose';
/**
 * Deletes the first documents that matches where from the collection.
 * it returns the document that has been deleted.
 *
 * @param obj.model  Mongoose Model reference
 * @param obj.where  MongoDB filter object
 *
 * @since 0.2.1
 * @author KingRayhan <me@rayhan.info>
 */
declare const destroy: (obj: {
    model: Model<any>;
    where: FilterQuery<any>;
}) => Promise<Document>;
export default destroy;
