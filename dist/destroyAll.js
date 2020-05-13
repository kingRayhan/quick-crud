"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Delete all documents that matches where keys
 * @author KingRayhan <me@rayhan.info>
 *
 * @param {MongooseModel} Model - mongoose Model reference
 * @param {import("mongoose").FilterQuery} where - MongoDB filter object
 */
var destroyAll = function (_a) {
    var model = _a.model, _b = _a.where, where = _b === void 0 ? {} : _b;
    return model.deleteMany(where);
};
exports.default = destroyAll;
//# sourceMappingURL=destroyAll.js.map