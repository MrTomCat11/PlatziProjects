// SCOPE con let
function saludar() {
  let name = "Javier"
  alert(`Hola ${name}`)
  // El scope con let es solo dentro de la funcion
}

saludar()

// SCOPE con var
// --> Ejemplo 1
var nombre = "Javier"

function saludar() {
    console.log(`Hola ${nombre}`);
}

saludar()
// --> Ejemplo 2
var nombre = "Javier"

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

saludar("Eric")
console.log(`La variable nombre tiene el valor ${nombre}`);

// --> Ejemplo 3
var nombre = "Javier"

function saludar() {
  var nombre = "Eric"
  console.log(`Hola ${nombre}`);
}

saludar()
console.log(`La variable nombre tiene el valor ${nombre}`);

// --> Ejemplo 4
var nombre = "Javier"

function saludar() {
  nombre = "Eric" // se reasgina el valor a nombre
  console.log(`Hola ${nombre}`);
}

saludar()
console.log(`La variable nombre tiene el valor ${nombre}`);

// --> Ejemplo 5
var nombre = "Javier"

function saludar() {
  if(true){
    var nombre = "Eric" // --> HACE EL HOISTING*
  }
  console.log(`Hola ${nombre}`);

/* Lo anterior es lo mismo que:
    function saludar(){
      var nombre
      if(true){
        nombre = "Eric"
      }
      console.log
    }
*/
// *NOTA: HOISTING de JS --> TODAS LAS VARIABLES QUE SE DECLARAN EN
//                          UNA FUNCION SE SUBEN PARA DECLARARSE
//                          AL PRINCIPIO DE LA FUNCION.
}

saludar()
console.log(`La variable nombre tiene el valor ${nombre}`);

// --> Ejemplo 6
function saludar10(nombre) {
  for(var i = 0; i < 10 ; i++){
    console.log(`Hola ${nombre}`)
  }
  console.log(`El valor de i es: ${i}`)
}
saludar10("Javier")

// --> Ejemplo 7
function saludar10(nombre) {
  for(let i = 0; i < 10 ; i++){
    console.log(`Hola ${nombre}`)
  }
  console.log(`El valor de i es: ${i}`)
  // NOTA: let tiene el scope solo del bloque donde está
}
saludar10("Javier")

// --> Ejemplo 8
function saludarJavier10() {
  const nombre = "Javier"
  for(let i = 0; i < 10 ; i++){
    console.log(`Hola ${nombre}`)
  }
}
saludarJavier10()

// NOTA: const es una variable que solo va a ser asignada
//       la primera vez y no va cambiar.
