var _this = this;
console.log("hola mundo");
//primitivas
var full_name = "Jorge Cano";
var age = 27;
var developer = true;
//arrays
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
