export class likeComment {
    constructor(private _likesCount: number, private _isSelected: boolean) {
    }

    onClick() {
        this._likesCount += (this._isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected;
    }

    get likesCount() {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }
}

let likeComment1 = new likeComment(10, true);
likeComment1.onClick();
console.log(`likesCount: ${likeComment1.likesCount}, isSelected: ${likeComment1.isSelected}`);