// --> Ejemplo 1
function saludarFamilia(apellido) { // Funcion externa del Closure
  return function saludarMiembroDeFamilia(nombre) { // Funcion interna del Closure
    console.log(`Hola ${nombre} ${apellido}`)
  }
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")
const saludarRomero = saludarFamilia("Romero")

saludarGomez("Pedro")
saludarGomez("Juan")
saludarGomez("Laura")
saludarGomez("Monica")

saludarPerez("Dario")
saludarPerez("Martin")
saludarPerez("Julieta")

saludarRomero("Jorge")

// --> Ejemplo 2
const makePrefixer = (prefix) => (word) => console.log(`${prefix}${word}`);

const prefijoRe = makePrefixer("re")
prefijoRe("bueno")
prefijoRe("malo")

const prefijoIn = makePrefixer("in")
prefijoIn("creible")
