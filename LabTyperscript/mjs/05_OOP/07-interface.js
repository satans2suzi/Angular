class Machine {
    caculate(x, y) {
        console.log(x + y);
        return x + y;
    }
}
class Superman extends Machine {
    constructor(name) {
        super();
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eat`);
    }
    sleep() {
        console.log(`${this.name} sleep`);
    }
    fly() {
        console.log(`${this.name} fly`);
    }
}
let thai = new Superman("Thai");
thai.eat();
thai.sleep();
thai.fly();
thai.caculate(3, 4);
