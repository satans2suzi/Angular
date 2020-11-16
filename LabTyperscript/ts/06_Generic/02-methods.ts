class StudyGeneric{
    static printArray<T>(params: T[]){
        console.log(params);
    }
    constructor(){
    
    }
}
StudyGeneric.printArray<number>([1,2,3,4]);