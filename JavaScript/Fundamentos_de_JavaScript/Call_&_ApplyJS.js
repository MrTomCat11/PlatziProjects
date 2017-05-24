// ************** EJEMPLOS DE LA FUNCION .call()
// Ejemplo 1 -->
  function saludar(veces) {
    for (let i = 0; i < veces; i++){
      console.log(`Hola ${this.nombre} ${this.apellido}`);
      // si no especificamos this, se remite al objeto global
    }
  }

  saludar(3)
  // si definimos esto, ahi si funciona...
  window.nombre = "javier"
  window.apellido = "perez"

// Ejemplo 2 -->
  const javier = {
    nombre: 'javier',
    apellido: 'perez'
  }

  function saludar(veces, uppercase) {
    let str = `Hola ${this.nombre} ${this.apellido}`
    str = uppercase ? str.toUpperCase() : str
    for (let i = 0; i < veces; i++){
      console.log();
    }
  }
  // con call si se ejecuta la funcion no solo la trae como bind
  saludar.call(javier, 3, true)
  
// Ejemplo 3-->  Utilizando el spread operator
  const javier = {
    nombre: 'javier',
    apellido: 'perez'
  }

  function saludar(veces, uppercase) {
    let str = `Hola ${this.nombre} ${this.apellido}`
    str = uppercase ? str.toUpperCase() : str
    for (let i = 0; i < veces; i++){
      console.log();
    }
  }
  const params = [3, true]
  // funciona de la misma manera que call, solo cambia un poco la sintaxis
  saludar.call(javier, ...params)

// ************** EJEMPLOS DE LA FUNCION .apply()
// Ejemplo 1 -->
  const javier = {
    nombre: 'javier',
    apellido: 'perez'
  }

  function saludar(veces, uppercase) {
    let str = `Hola ${this.nombre} ${this.apellido}`
    str = uppercase ? str.toUpperCase() : str
    for (let i = 0; i < veces; i++){
      console.log();
    }
  }
  // funciona de la misma manera que call, solo cambia un poco la sintaxis
  saludar.apply(javier, [3, true])
