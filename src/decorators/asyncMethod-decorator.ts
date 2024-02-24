// Decorator Factory
function Controller1(endPoint: string) {
    return (constructor: Function) => {
        console.log("Controller Decorator Called");
        constructor.prototype.endPoint = endPoint;
        // Login -> with 3 seconds delay (async method)
        constructor.prototype.loginFromController = async () => {
            await new Promise(resolve => setTimeout(resolve, 3000)); // delay 3 seconds
            console.log("You logged in from controller decorator");
        }
    }
}

function Guard1(role: string) {
    return (constructor: Function) => {
        console.log("Guard Decorator Called");
        constructor.prototype.role = role;

        // Login without any delay (not async)
        constructor.prototype.loginFromGuard = () => {
            console.log("You logged in from guard");
        }
    }
}

@Guard1("Manager") // second this decorator will call
@Controller1("/api/auth") // first this decorator will call
class Auth1 {

}

const auth = new Auth1();

// this going to work second even though its decorator called first becouse an async method with 3 seconds delay
//@ts-ignore
auth.loginFromController();

// this going to work first even though its decorator called second
//@ts-ignore
auth.loginFromGuard();
