let javier = {
  nombre:'Javier',
  apellido: 'Perez',
  edad:21
}

let otroJavier = javier

otroJavier === javier // '===' sirve para comparar 2 objetos

otroJavier.edad = 27

javier


// Se crea un nuevo objeto para que el objeto persona
// sea inmutable.
cumpleanos = function (persona) {
  const clone = Object.assign({},persona)
  clone.edad++
  return clone
}
