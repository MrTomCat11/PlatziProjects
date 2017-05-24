//tsc decorators.ts --target ES5 --experimentalDecorators

class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting = message;
    }

    @enumerable(false)
    greet(){
        return 'Hey, ' + this.greeting;
    }
}

function enumerable(value:boolean){
    return function(target:any, propertyKey:string, descriptor:PropertyDescriptor){
        descriptor.enumerable = value;
    }
}

let gree = new Greeter('soy el mensaje');

console.log(gree.greet());
