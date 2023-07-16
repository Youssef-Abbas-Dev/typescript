import { Person } from "./person";

const username:string = "Youssef";

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    override get fullName(): string {
        return "Student: " + super.fullName;
    }

    study(): void {
        this.drinkCoffee();
        console.log("studying");
    }
}

export default Student;
export { username }