class Course {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showCourceInfo() {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}
class CourseMobile extends Course {
    constructor(id, name, price, author) {
        super(id, name, price);
        this.author = author;
    }
    showCourceInfo() {
        super.showCourceInfo();
        console.log(this.author);
    }
}
let courseObj = new Course(1, "Android", 14000);
courseObj.showCourceInfo();
let CourseMobileObj2 = new CourseMobile(1, "Android", 14000, "Thai");
CourseMobileObj2.showCourceInfo();
