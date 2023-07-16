function Logger(classPrototype:Object,methodName:string,descriptor: PropertyDescriptor) {
    console.log({ classPrototype,methodName,descriptor});

    const originalValue = descriptor.value;
    descriptor.value = function(speed:number) {
        console.log("Before car moving");
        originalValue.call(this,speed);
        console.log("After car moving");
    }
}

class Car {

    @Logger
    move(speed:number) {
        console.log("The car moving with speed: " + speed);
    }

    stop() {
        console.log("The car stopped");
    }
}

const car = new Car();
car.move(90);