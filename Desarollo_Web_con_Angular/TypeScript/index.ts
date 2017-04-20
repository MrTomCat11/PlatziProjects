console.log("hola mundo");

//primitivas
var full_name:string = "Jorge Cano";
var age:number = 27;
var developer:boolean = true;

//arrays
var skills:Array<string> = ['Javascript', 'Typescript', 'Angular'];
var numberArray:number[] = [123, 123, 412, 45];

enum Role { Employee, Manager, Admin, Developer}
var role:Role = Role.Employee;

console.log("roles", role);

function setName(name:string):void{
  this.full_name = name;
}
function getHello(pretext:string):string{
  return pretext + " " + this.full_name;
}

function inConsole(nameFunction:any):void{
  console.log(nameFunction);
}

inConsole(getHello('Texto dentro del gethello'));
inConsole(full_name);
inConsole('hola soy un simple string');

var data:string[] = ['AngularJS', 'Angular', 'Redux', 'ReactJS', 'VUE'];
data.forEach((frameworkslibs) => this.inConsole(frameworkslibs))
