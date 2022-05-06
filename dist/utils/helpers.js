"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUndefinedKeys = void 0;
var removeUndefinedKeys = function (obj) {
    var shallowCopyObj = __assign({}, obj);
    Object.keys(shallowCopyObj).forEach(function (key) {
        if (shallowCopyObj[key] === undefined)
            delete shallowCopyObj[key];
    });
    return shallowCopyObj;
};
exports.removeUndefinedKeys = removeUndefinedKeys;
//# sourceMappingURL=helpers.js.map