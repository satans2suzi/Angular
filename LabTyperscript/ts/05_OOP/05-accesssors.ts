class Course01{
    private _name: string;

    constructor(name:string){
        this._name = name;
    }

    showCourseInfo(){
        console.log(this._name);
    }

    public get name() : string {
        return this._name;
    }

    public set name(v: string){
        this._name = v;
    }
}

var courseObj01 = new Course01("TyperScript")
console.log(courseObj01);
console.log("Name :" + courseObj01.name);
courseObj01.name = "TyperScriptTraining";
console.log("Name :" + courseObj01.name);