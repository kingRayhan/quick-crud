"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Deletes all documents that matches `where` from the collection.
 * @param {object} obj Quick Crud options
 * @param obj.model  Mongoose Model reference
 * @param obj.where  MongoDB filter object
 *
 * @since 0.2.1
 * @author KingRayhan <me@rayhan.info>
 */
var destroyAll = function (_a) {
    var model = _a.model, _b = _a.where, where = _b === void 0 ? {} : _b;
    return model.deleteMany(where);
};
exports.default = destroyAll;
//# sourceMappingURL=destroyAll.js.map