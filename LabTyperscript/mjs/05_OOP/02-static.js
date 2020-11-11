var TaskStates;
(function (TaskStates) {
    TaskStates[TaskStates["Create"] = 100] = "Create";
    TaskStates[TaskStates["Active"] = 101] = "Active";
    TaskStates[TaskStates["InActive"] = 102] = "InActive";
    TaskStates[TaskStates["Process"] = 103] = "Process";
    TaskStates[TaskStates["Finish"] = 104] = "Finish";
})(TaskStates || (TaskStates = {}));
class TaskService {
    constructor(tasks, tasks2) {
        this.tasks = tasks;
        TaskService.tasks2 = tasks2;
    }
    getAllTtems() {
        return this.tasks;
    }
    showItemInfo() {
        for (let task of this.tasks) {
            console.log(task);
        }
    }
    static showItemState() {
        for (let task2 of TaskService.tasks2) {
            console.log(task2);
        }
    }
}
TaskService.username = "THai";
let tasks1 = [{
        id: 23,
        name: "CodeDing",
        state: TaskStates.Active
    }, {
        id: 23,
        name: "CodeDing",
        state: TaskStates.InActive
    }, {
        id: 23,
        name: "CodeDing",
        state: TaskStates.Active
    }];
let tasks2 = [{
        id: 23,
        name: "CodeDing",
        state: TaskStates.Active
    }, {
        id: 23,
        name: "CodeDing",
        state: TaskStates.InActive
    }, {
        id: 23,
        name: "CodeDing",
        state: TaskStates.Active
    }];
let taskServiceObj = new TaskService(tasks1);
console.log(taskServiceObj.getAllTtems());
taskServiceObj.showItemInfo();
TaskService.showItemState();
