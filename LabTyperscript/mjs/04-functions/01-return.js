function funcNoReturn() {
    console.log("funcNoReturn");
}
function funcReturnNumber() {
    return 2;
}
function funcReturnArray() {
    return ["1", "2"];
}
funcNoReturn();
funcReturnNumber();
console.log(funcReturnNumber());
console.log(funcReturnArray());
