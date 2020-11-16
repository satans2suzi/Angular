//ID NAME PRICE     string string number
//ID NAME PRICE     number string string
//ID NAME PRICE     string string boolean

class Product<A,B,C>{
    id: A;
    name: B;
    price: C;
    constructor(id: A, name: B, price: C){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showProductInfo(){
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}


let product1 = new Product<string,string,number>("ID1", "Product1", 20);
product1.showProductInfo();
let product2 = new Product<number,string,number>(12, "Product2", 20);
product2.showProductInfo();