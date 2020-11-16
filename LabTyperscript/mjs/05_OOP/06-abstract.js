class Laptop {
    constructor() {
    }
    keyboard() {
        console.log("Laptop.keyboard");
    }
    chipset() {
        console.log("Laptop.chipset");
    }
}
class LatopDell extends Laptop {
    keyboard() {
        console.log("LaptopDell.keyboard");
    }
    mainboard() {
        console.log("LaptopDell.mainboard");
        return "123";
    }
}
let laptopObj = new LatopDell();
laptopObj.keyboard();
laptopObj.mainboard("a");
laptopObj.chipset();
