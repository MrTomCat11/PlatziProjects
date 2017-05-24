// Ejemplo 1 --> Con una variable
class Persona {
  constructor(nombre, amigos = []){
    this.nombre = nombre
    this.amigos = amigos
  }

  listarAmigos(){
    const _this = this  // se puede _this o self
    this.amigos.forEach(function (amigo) {
      console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`);
    })
  }
}

const javier = new Persona("Javier",["Pedro","Juan","Pepe"])

// Ejemplo 2 --> Con el metodo .bind en la funcion
class Persona {
  constructor(nombre, amigos = []){
    this.nombre = nombre
    this.amigos = amigos
  }

  listarAmigos(){
    this.amigos.forEach(function (amigo) {
      console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`);
    }.bind(this)) // Se puede utilizar bind pasandole this para que funcione
  }
}

const javier = new Persona("Javier",["Pedro","Juan","Pepe"])

// Ejemplo 3 --> Con Arrow Function
class Persona {
  constructor(nombre, amigos = []){
    this.nombre = nombre
    this.amigos = amigos
  }

  listarAmigos(){
    this.amigos.forEach((amigo) => { // Por la Arrow Function va a coger el this
      console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`);
    })
  }
}

const javier = new Persona("Javier",["Pedro","Juan","Pepe"])
