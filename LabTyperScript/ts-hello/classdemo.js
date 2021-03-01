var Rectangle = /** @class */ (function () {
    function Rectangle(a, h) {
        this.a = a;
        this.h = h;
        this.a = a;
        this.h = h;
    }
    Rectangle.prototype.dientich = function () {
        var dientich = (this.a * this.h) / 2;
        console.log('dien tich tam giac: ' + dientich);
    };
    return Rectangle;
}());
var tamgiac1 = new Rectangle(5, 6);
tamgiac1.dientich();
