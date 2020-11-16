abstract class Laptop{
    
    constructor(){
    
    }

    public keyboard(): void{
        console.log("Laptop.keyboard");
    }
    public abstract mainboard(a:string): string;
    public chipset(): void{
        console.log("Laptop.chipset");  
    }

}
class LatopDell extends Laptop{
    public keyboard(): void{
        console.log("LaptopDell.keyboard");
    }
    public mainboard(): string{
        console.log("LaptopDell.mainboard");
        return "123"
    }
}
let laptopObj : Laptop = new LatopDell();
laptopObj.keyboard();
laptopObj.mainboard("a");
laptopObj.chipset();