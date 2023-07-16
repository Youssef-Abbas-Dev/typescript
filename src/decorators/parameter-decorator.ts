/* Decorators - Parameter Decorator */

function Http(classPrototype: Object, methodName: string, parameterIndex: number) {
    console.log({ classPrototype, methodName, parameterIndex });
    if (parameterIndex === 0)
      console.log("This is request object");
    else if (parameterIndex === 1)
      console.log("This is response object");
    else
      console.log("This is not request nor response object");
  }
  
  class BookController {
  
    getBook(@Http req: Object, res: Object) {
      console.log(req, res);
    }
  }