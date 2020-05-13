"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResourceList = /** @class */ (function () {
    function ResourceList(query, paginationOptions) {
        var _a;
        this.query = query;
        this.paginationOptions = paginationOptions;
        this.currentPage = (_a = paginationOptions === null || paginationOptions === void 0 ? void 0 : paginationOptions.page) !== null && _a !== void 0 ? _a : 1;
    }
    ResourceList.prototype.getQuery = function () {
        return this.query;
    };
    ResourceList.prototype.getCurrentPage = function () {
        return this.currentPage;
    };
    ResourceList.prototype.sortData = function () {
        var _a, _b, _c;
        var sortBy = (_c = (_b = (_a = this.paginationOptions) === null || _a === void 0 ? void 0 : _a.sort) === null || _b === void 0 ? void 0 : _b.split(",").join(" ")) !== null && _c !== void 0 ? _c : "-createdAt";
        this.query.sort(sortBy);
        return this;
    };
    ResourceList.prototype.limitedData = function () {
        var _a, _b;
        this.query.limit((_b = (_a = this.paginationOptions) === null || _a === void 0 ? void 0 : _a.limit) !== null && _b !== void 0 ? _b : 10);
        return this;
    };
    ResourceList.prototype.pagination = function () {
        var _a, _b;
        var page = ((_a = this.paginationOptions) === null || _a === void 0 ? void 0 : _a.page) || 1;
        var limit = ((_b = this.paginationOptions) === null || _b === void 0 ? void 0 : _b.limit) || 10;
        var skip = (page - 1) * limit;
        this.query.skip(skip);
        return this;
    };
    return ResourceList;
}());
exports.default = ResourceList;
//# sourceMappingURL=ResourceList.js.map