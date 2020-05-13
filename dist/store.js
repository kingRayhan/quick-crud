"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @typedef {import("mongoose").Model} MongooseModel
 */
/**
 * Create a document
 * @param {object} obj
 * @param {MongooseModel} obj.model - mongoose Model reference
 * @param {object} obj.data - An object of data to store in MongoDB based on Mongoose Schema
 *
 * @author KingRayhan <me@rayhan.info>
 */
var store = function (_a) {
    var model = _a.model, data = _a.data;
    return model.create(data);
};
exports.default = store;
//# sourceMappingURL=store.js.map