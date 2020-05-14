"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create a document
`*
 * @param obj.model - Mongoose Model reference
 * @param obj.data - An object of data to store in MongoDB based on Mongoose Schema`
 *
 * @since 0.2.1
 * @author KingRayhan <me@rayhan.info>
 */
var store = function (options) {
    var model = options.model, data = options.data;
    return model.create(data);
};
exports.default = store;
//# sourceMappingURL=store.js.map