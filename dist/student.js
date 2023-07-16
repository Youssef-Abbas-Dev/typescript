"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.username = void 0;
const person_1 = require("./person");
const username = "Youssef";
exports.username = username;
class Student extends person_1.Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    get fullName() {
        return "Student: " + super.fullName;
    }
    study() {
        this.drinkCoffee();
        console.log("studying");
    }
}
exports.default = Student;
//# sourceMappingURL=student.js.map