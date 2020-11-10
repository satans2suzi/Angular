var STATUS;
(function (STATUS) {
    STATUS[STATUS["CREATED"] = 100] = "CREATED";
    STATUS[STATUS["PROCESS"] = 101] = "PROCESS";
    STATUS[STATUS["FINISH"] = 102] = "FINISH";
})(STATUS || (STATUS = {}));
;
let todoStatus = STATUS.PROCESS;
console.log(todoStatus);
