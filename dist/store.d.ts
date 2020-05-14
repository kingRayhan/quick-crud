import { Model } from 'mongoose';
/**
 * Create a document
`*
 * @param obj.model - Mongoose Model reference
 * @param obj.data - An object of data to store in MongoDB based on Mongoose Schema`
 *
 * @since 0.2.1
 * @author KingRayhan <me@rayhan.info>
 */
declare const store: (options: {
    model: Model<any, {}>;
    data: any;
}) => Promise<any>;
export default store;
