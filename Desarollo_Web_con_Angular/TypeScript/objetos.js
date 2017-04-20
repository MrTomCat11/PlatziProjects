var MyPerson = (function () {
    function MyPerson(_first_name, _last_name) {
        console.log(_first_name, _last_name);
    }
    return MyPerson;
}());
var personaUno = new MyPerson();
var personaDos = new MyPerson('Jorge');
var personaTres = new MyPerson('Jorge', 'Cano');
