class Course{
    public id : number;
    public name: string;
    protected price: number;

    constructor( id: number, name:string, price: number){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    showCourceInfo(): void{
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}
class CourseMobile extends Course{
    author: string;
    constructor(id: number, name: string, price: number, author: string){
        // console.log(super.id);
        super(id,name,price);
        this.author = author;
    
    }

    showCourceInfo(){
        super.showCourceInfo();
        console.log(this.author);
    }
    checkPro(){
        console.log(this.id)
    }
}

let courseObj = new Course(1, "Android", 14000);
console.log(courseObj.name);
// courseObj.showCourceInfo();
let CourseMobileObj2 = new CourseMobile(1, "Android", 14000, "Thai");
console.log(CourseMobileObj2.name);
// CourseMobileObj2.showCourceInfo();

/*
                    Inside      Outside     Child Class     
    public             +           +            +
    private            +           -            -
    protected          +           -            +
*/