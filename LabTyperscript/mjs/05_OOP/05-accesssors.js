class Course01 {
    constructor(name) {
        this._name = name;
    }
    showCourseInfo() {
        console.log(this._name);
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
}
var courseObj01 = new Course01("TyperScript");
console.log(courseObj01);
console.log("Name :" + courseObj01.name);
courseObj01.name = "TyperScriptTraining";
console.log("Name :" + courseObj01.name);
