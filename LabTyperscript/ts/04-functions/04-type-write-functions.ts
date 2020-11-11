function userInfo01(name: string, age: number) : string {
    return ` Ten: ${name} \n ${age}`; 
}
console.log(userInfo01("Thai", 27))

let userInfo02 = function(name: string, age: number) : string {
    return ` Ten: ${name} \n ${age}`; 
}
console.log(userInfo02("Yen", 25))

let userInfo03 : (name: string, age: number) => string = function (name, age){
    return ` Ten: ${name} \n ${age}`;
}
console.log(userInfo03("Nguyen", 17))