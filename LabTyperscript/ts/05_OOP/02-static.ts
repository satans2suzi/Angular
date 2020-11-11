enum TaskStates{
    Create =100,
    Active,
    InActive,
    Process,
    Finish
}

interface TaskInterface{
    id: number;
    name: string;
    state?: TaskStates;
}
class TaskService{
    tasks: TaskInterface[];
    static tasks2 : TaskInterface[];
    static username: string = "THai";
    constructor(tasks: TaskInterface[], tasks2?: TaskInterface[]){
        this.tasks = tasks;
        TaskService.tasks2 = tasks2;
    }
    getAllTtems(){
        return this.tasks;
    }
    showItemInfo(){
        for (let task of this.tasks){
            console.log(task);
        }
    }
    static showItemState(): void {
        for (let task2 of TaskService.tasks2){
            console.log(task2)
        }
    }
}

let tasks1 : TaskInterface[] = [{
    id : 23,
    name : "CodeDing",
    state : TaskStates.Active
},{
    id : 23,
    name : "CodeDing",
    state : TaskStates.InActive
},{
    id : 23,
    name : "CodeDing",
    state : TaskStates.Active
}]

let tasks2 : TaskInterface[] = [{
    id : 23,
    name : "CodeDing",
    state : TaskStates.Active
},{
    id : 23,
    name : "CodeDing",
    state : TaskStates.InActive
},{
    id : 23,
    name : "CodeDing",
    state : TaskStates.Active
}]

let taskServiceObj = new TaskService(tasks1)

console.log(taskServiceObj.getAllTtems())
taskServiceObj.showItemInfo()
TaskService.showItemState()
