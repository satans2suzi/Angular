//ID NAME PRICE     string string number
//ID NAME PRICE     number string string
//ID NAME PRICE     string string boolean
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showProductInfo() {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}
let product1 = new Product("ID1", "Product1", 20);
product1.showProductInfo();
let product2 = new Product(12, "Product2", 20);
product2.showProductInfo();
