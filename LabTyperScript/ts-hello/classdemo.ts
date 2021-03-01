class Rectangle {
    constructor(private a: number, private h: number) {
        this.a = a;
        this.h = h;
    }
    dientich() {
        let dientich = (this.a * this.h) / 2
        console.log('dien tich tam giac: ' + dientich);
    }
}

let tamgiac1 = new Rectangle(5, 6)
tamgiac1.dientich()
