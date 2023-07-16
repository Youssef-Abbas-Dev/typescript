// Decorator Factory
function Controller(endPoint: string) {
    return (constructor: Function) => {
      console.log("Controller Decorator Called");
      constructor.prototype.endPoint = endPoint;
      constructor.prototype.login = () => {
        console.log("You logged in successfully");
      }
    }
  }
  
  function Guard(role:string) {
    return (constructor:Function) => {
      console.log("Guard Decorator Called");
      constructor.prototype.role = role;
    }
  }
  
  @Guard("Manager")
  @Controller("/api/auth")
  class Auth {
  
  }