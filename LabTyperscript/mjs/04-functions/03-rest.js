function showStudentInfo(name, ...course) {
    return name + " study " + course.join(" - ");
}
console.log(showStudentInfo("Thai", "TypeScript", "ES6"));
