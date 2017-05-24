var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hey, ' + this.greeting;
    };
    return Greeter;
}());
__decorate([
    enumerable(false)
], Greeter.prototype, "greet", null);
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var gree = new Greeter('soy el mensaje');
console.log(gree.greet());
var _this = this;
console.log("hola mundo");
var full_name = "Jorge Cano";
var age = 27;
var developer = true;
var skills = ['Javascript', 'Typescript', 'Angular'];
var numberArray = [123, 123, 412, 45];
var Role;
(function (Role) {
    Role[Role["Employee"] = 0] = "Employee";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["Developer"] = 3] = "Developer";
})(Role || (Role = {}));
var role = Role.Employee;
console.log("roles", role);
function setName(name) {
    this.full_name = name;
}
function getHello(pretext) {
    return pretext + " " + this.full_name;
}
function inConsole(nameFunction) {
    console.log(nameFunction);
}
inConsole(getHello('Texto dentro del gethello'));
inConsole(full_name);
inConsole('hola soy un simple string');
var data = ['AngularJS', 'Angular', 'Redux', 'ReactJS', 'VUE'];
data.forEach(function (frameworkslibs) { return _this.inConsole(frameworkslibs); });
var pUno = {
    first_name: 'Jorge',
    last_name: 'Cano',
    twitter_account: '@jorgeucano'
};
var pDos = {
    first_name: 'Pepe',
    last_name: 'Perez',
};
console.log(pUno);
console.log(pDos);
var MyPerson = (function () {
    function MyPerson(first_name, last_name) {
        console.log("first_name", first_name);
        console.log("last_name", last_name);
        this.first_name = first_name;
        this.last_name = last_name;
    }
    MyPerson.prototype.getSaludo = function () {
        var emojis = '=D';
        return "Saludos:\n        " + this.first_name + " " + this.last_name + ",\n        te enviamos un emojis de la consola\n    " + emojis;
    };
    return MyPerson;
}());
var personaUno = new MyPerson();
var personaDos = new MyPerson('Jorge');
var personaTres = new MyPerson('Jorge', 'Cano');
console.log(personaTres.getSaludo());
var Person = (function () {
    function Person() {
        this.first_name = "Jor";
        this.last_name = "Ca";
        this.twitter_user = '@jorgeucano';
    }
    Person.prototype.setLastName = function (last_name) {
        this.last_name = last_name;
    };
    return Person;
}());
var myPerson = new Person();
myPerson.setLastName("Cano");
myPerson.first_name = "Jorge";
console.log(myPerson);
//# sourceMappingURL=tsc.js.map