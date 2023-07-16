"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.Teacher = exports.Person = void 0;
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("walking");
    }
    drinkCoffee() {
        console.log("drink a cup of coffee");
    }
}
exports.Person = Person;
class Teacher extends Person {
    constructor(teacherId, firstName, lastName) {
        super(firstName, lastName);
        this.teacherId = teacherId;
    }
    get fullName() {
        return "Teacher: " + super.fullName;
    }
    teach() {
        this.drinkCoffee();
        console.log("teaching");
    }
}
exports.Teacher = Teacher;
class Employee extends Person {
    get fullName() {
        return "Employee: " + super.fullName;
    }
}
exports.Employee = Employee;
//# sourceMappingURL=person.js.map