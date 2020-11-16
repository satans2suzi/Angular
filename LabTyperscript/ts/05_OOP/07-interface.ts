interface Peoples{
    name: string;
    eat(): void;
    sleep(): void;
}

interface Bird{
    fly(): void;
}

class Machine{
    caculate(x: number, y: number): number{
        console.log(x+y);
        return x + y
    }
}
class Superman extends Machine implements Peoples, Bird{
    name: string;
    constructor(name:string){
        super()
        this.name = name;
    }
    eat(): void{
        console.log(`${this.name} eat`);
    }
    sleep(): void{
        console.log(`${this.name } sleep`);
    }
    fly(): void{
        console.log(`${this.name } fly`);
    }
}

let thai : Superman = new Superman("Thai")
thai.eat();
thai.sleep();
thai.fly();
thai.caculate(3,4)
