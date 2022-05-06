/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model, FilterQuery, QueryPopulateOptions } from 'mongoose';
/**
 * Fetching single Resource
 *
 * @param obj.model - Mongoose Model reference
 * @param obj.populateOptions - Mongoose population object/string
 * @param obj.where - MongoDB filter object
 *
 * @since 0.2.1
 * @author KingRayhan <me@rayhan.info>
 */
declare const show: ({ model, where, populateOptions }: {
    model: Model<any>;
    where: FilterQuery<any>;
    populateOptions?: any;
}) => import("mongoose").Query<any, any, {}, any>;
export default show;
