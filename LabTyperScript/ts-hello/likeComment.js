"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeComment = void 0;
var likeComment = /** @class */ (function () {
    function likeComment(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    likeComment.prototype.onClick = function () {
        this._likesCount += (this._isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(likeComment.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(likeComment.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    return likeComment;
}());
exports.likeComment = likeComment;
var likeComment1 = new likeComment(10, true);
likeComment1.onClick();
console.log("likesCount: " + likeComment1.likesCount + ", isSelected: " + likeComment1.isSelected);
