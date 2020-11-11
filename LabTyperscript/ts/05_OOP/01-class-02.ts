// enum TaskState{
//     Create =100,
//     Active,
//     InActive,
//     Process,
//     Finish
// }

// interface TaskInterface{
//     id: number;
//     name: string;
//     state?: TaskState;
// }
// class TaskService{
//     tasks: TaskInterface[];
//     constructor(tasks: TaskInterface[]){
//         this.tasks = tasks;
//     }
//     getAllTtems(){
//         return this.tasks;
//     }
// }

// let tasks1 : TaskInterface[] = [{
//     id : 23,
//     name : "CodeDing",
//     state : TaskState.Active
// },{
//     id : 23,
//     name : "CodeDing",
//     state : TaskState.InActive
// },{
//     id : 23,
//     name : "CodeDing",
//     state : TaskState.Active
// }]

// let taskServiceObj = new TaskService(tasks1)

// console.log(taskServiceObj.getAllTtems())
