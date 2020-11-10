function totalLength(x:(string| any), y: string[]): number{
    return x.length + y.length;
}
console.log(totalLength("abc", ["123"]))
console.log(totalLength([1, "abc", true], ["123"]))