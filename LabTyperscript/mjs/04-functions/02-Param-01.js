function userNewInfo01(name, age) {
    if (age == null && name == null) {
        return `Khong co gi`;
    }
    else if (age == null) {
        return `Ten: ${name}`;
    }
    else {
        return `Ten: ${name}, tuoi: ${age}`;
    }
}
console.log(userNewInfo01());
