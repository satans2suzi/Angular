interface Point {
    x: number;
    y: string;
    z: number[];
}

class infoStudent{
    name: string;
    age: number;
    sex: string;
}
let doSomeThing = (point: Point) => console.log(point);
doSomeThing({x:1,y:"2",z: [1,2,3]})
let infoStudent1 : infoStudent = {
    name:"Thai",
    age : 27,
    sex : "nam"
}