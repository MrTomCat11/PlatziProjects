/* Primera versión
function suma(...numeros) {
  let acum = 0
  for(let i = 0; i<numeros.length; i++){
    acum += numeros[i]
  }
  return acum
}
*/

function suma(...numeros) {
  let acum = 0
  for(let i = 0; i<numeros.length; i++){
    acum += numeros[i]
  }

  numeros.reduce(function (acum, numero, i) {

  })

  return acum
}

suma(4, 8, 12, 8954, 7)
