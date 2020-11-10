let course: string[] = ["ES6","TS","JAVA"];
console.log(course);

interface courseList {
    [index: number]: string;
}
let course2 : courseList;
course2 = ["ES6","TS","JAVA"]