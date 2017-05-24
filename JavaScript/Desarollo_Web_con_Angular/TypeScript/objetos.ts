class MyPerson{
  first_name : string;
  last_name  : string;

  constructor(first_name?:string, last_name?:string){
    console.log("first_name", first_name);
    console.log("last_name", last_name);
    this.first_name = first_name;
    this.last_name = last_name;
  }

  getSaludo():string{
    let emojis = '=D';
    return `Saludos:
        ${this.first_name} ${this.last_name},
        te enviamos un emojis de la consola
    ` + emojis;
  }
}

let personaUno = new MyPerson();
let personaDos = new MyPerson('Jorge');
let personaTres = new MyPerson('Jorge','Cano');

console.log(personaTres.getSaludo());
