function funcNoReturn(): void{
    console.log("funcNoReturn");
}

function funcReturnNumber(): number{
    return 2;
}
function funcReturnArray(): string[] {
    return ["1","2"];
}
funcNoReturn();
funcReturnNumber()
console.log(funcReturnNumber());
console.log(funcReturnArray());