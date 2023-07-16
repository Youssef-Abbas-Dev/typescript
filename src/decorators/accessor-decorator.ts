function ToUpperCase(classPrototype: Object, methodName: string, descriptor: PropertyDescriptor) {
    console.log({ classPrototype, methodName });
  
    const originalValue = descriptor.get;
    descriptor.get = function () {
      const result = originalValue?.call(this);
      return result.toUpperCase();
    }
  }
  
  class Person {
    constructor(public firstName: string, public lastName: string) { }
  
    @ToUpperCase
    get fullName(): string {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person = new Person("youssef", "abbas");
  console.log(person.fullName);