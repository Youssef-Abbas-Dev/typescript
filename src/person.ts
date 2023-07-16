// Person Calss
export class Person {
    constructor(public firstName: string, public lastName: string) {

    }

    get fullName(): string {
        return this.firstName + " " + this.lastName;
    }

    walk(): void {
        console.log("walking");
    }

    protected drinkCoffee():void {
        console.log("drink a cup of coffee");
    }
}


// Teacher Class
export class Teacher extends Person {
    constructor(public teacherId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    override get fullName(): string {
        return "Teacher: " + super.fullName;
    }

    teach(): void {
        this.drinkCoffee();
        console.log("teaching");
    }
}

// Employee Class
export class Employee extends Person {
    override get fullName(): string {
        return "Employee: " + super.fullName;
    }
}