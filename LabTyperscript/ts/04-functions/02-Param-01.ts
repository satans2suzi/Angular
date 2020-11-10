function userInfo01(name?: string, age?: number): string{
    if(age == null && name == null){
        return `Khong co gi`;   
    }else if (age == null){
        return `Ten: ${name}`;
    }else{
        return `Ten: ${name}, tuoi: ${age}`;           
    }
    
}
console.log(userInfo01());