function showStudentInfo(name: string, ...course: string[]): string{
    return name + " study " + course.join(" - ");
}
console.log(showStudentInfo("Thai", "TypeScript", "ES6"))