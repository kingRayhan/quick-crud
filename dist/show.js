"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Fetching single Resource
 * @param {object} obj
 * @param {MongooseModel} model - mongoose Model reference
 * @param {import("mongoose").QueryPopulateOptions} populateOptions - Population schema properties seperated by space
 * @param {import("mongoose").FilterQuery} where - MongoDB filter object
 * @return {import("mongoose").Query} - return a single resource
 *
 * @author KingRayhan <me@rayhan.info>
 */
var show = function (_a) {
    var model = _a.model, _b = _a.where, where = _b === void 0 ? {} : _b, populateOptions = _a.populateOptions;
    return model.findOne(where).populate(populateOptions);
};
//: mongoose.Query<any>
exports.default = show;
//# sourceMappingURL=show.js.map