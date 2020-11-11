let f1 = function(i: number): number{
    return i * i;
}
let f2 = function(i: number) {
    return i * i;
}
let f3 = (i: number) : number => {
    return i * i;
}
let f4 = (i: number)  => {
    return i * i;
}
let f5 = (i: number)  =>  i * i;

console.log(f1(2))
console.log(f2 (3))
console.log(f3 (4))
console.log(f4 (5))
console.log(f5 (6))