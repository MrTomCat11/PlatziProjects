// Variables | No son fuertemente tipadas,
//             asignamos variables simples/primitivas
  var javier = "Javier"
  javier = 26
  javier = new Date()
// Variables | asignamos valores complejos, como las funciones
//             las funciones son ciudadanos de primer orden
  javier = function saludar() { alert('Hola') }
// Variables | pueden tener valores como los objetos
  javier = {
    nombre: "Javier",
    apellido: "Perez",
    edad: 26,
    saludar: function saludar() {
      alert(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
  }
// Variables... no tan variables | const
  const edad = 26

  edad++ // Esto no se puede por lo que definimos constante.
// Variables... muy variables
  function saludar() {
    var nombre = "Sacha" // El Scope está reducido a la funcion.
    alert(`Hola ${nombre}`)
  }

  nombre // undefined
// Variables... muy variables
  function saludar() {
    nombre = "Sacha"  // Como no tiene var se asigna al scope global al objeto window
    alert(`Hola ${nombre}`)
  }

  nombre
  window.nombre === nombre // true
// Variables... muy variables
  var dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ]

  for (var i=0; i < dias.length; i++){ // <-- es lo mismo declararla fuera del for
    console.log(`${dias[i]} es el dia #${i + 1} de la semana`);
  }

  i // ? --> el numero final del for para este caso 7.
// Variables... muy variables
  var dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ]

  for (let i=0; i < dias.length; i++){ // <-- es lo mismo declararla fuera del for
    console.log(`${dias[i]} es el dia #${i + 1} de la semana`);
  }

  i // undefined

/* PALABRAS RESERVADAS
break     delete    function    return  typeof
case      do        if          switch  var
catch     else      in          this    void
continue  false     instanceof  throw   while
debugger  finally   new         true    with
default   for       null        try             */

/* PALABRAS RESERVADAS ECMAScript5
class  const  enum  export  extends  import  super */

/* PALABRAS RESERVADAS en "strict mode"
implements  let      private    public  yield
interface   package  protected  static          */

// Caracter Punto y coma (;)
const nombre = "Javier"
function saludar(){ console.log(`Hola ${nombre}`)}
saludar() // Esto Funciona perfectamente, pero si utilizamos IIFE....
// IIFE --> Immediately Invoked Function Expression
const nombre = "Javier" // <-- Aqui toca añadir el ; para que funcione.
(function saludar(){ console.log(`Hola ${nombre}`)})() // Arroja error por el ;
// otro ejemplo de ;
const nombre = "Javier" // <-- Aqui toca añadir el ; para que funcione.
[
  "lunes",
  "martes"
].forEach(function (dia) {
  console.log(dia);
})  // Arroja error de sintaxis
