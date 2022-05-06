/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model, FilterQuery } from 'mongoose';
/**
 * Deletes all documents that matches `where` from the collection.
 * @param obj.model  Mongoose Model reference
 * @param obj.where  MongoDB filter object
 *
 * @since 0.2.1
 * @author KingRayhan <me@rayhan.info>
 */
declare const destroyAll: ({ model, where }: {
    model: Model<any>;
    where: FilterQuery<any>;
}) => import("mongoose").Query<import("mongodb").DeleteResult, any, {}, any>;
export default destroyAll;
