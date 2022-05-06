"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Fetching single Resource
 *
 * @param obj.model - Mongoose Model reference
 * @param obj.PopulateOptions - Mongoose population object/string
 * @param obj.where - MongoDB filter object
 *
 * @since 0.2.1
 * @author KingRayhan <me@rayhan.info>
 */
var show = function (_a) {
    var model = _a.model, _b = _a.where, where = _b === void 0 ? {} : _b, populateOptions = _a.populateOptions;
    var query = model.findOne(where);
    if (populateOptions)
        query.populate(populateOptions);
};
exports.default = show;
//# sourceMappingURL=show.js.map