function showNumberInto(x: number): number{
    return x;
}

function showStringInto(x: string): string{
    return x;
}

function showInto<T>(x: T):T {
    return x;
}
console.log(showInto<string>("a"));
console.log(showInto<number>(123));
console.log(showInto<boolean>(true));