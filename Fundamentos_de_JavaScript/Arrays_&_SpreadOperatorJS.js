/* Primera versión de la suma de numeros de un array
function suma(...numeros) {
  let acum = 0
  for(let i = 0; i<numeros.length; i++){
    acum += numeros[i]
  }
  return acum
}
suma(4, 8, 12, 8954, 7)
*/

function suma(...numeros) {
  return numeros.reduce(function (acum, numero) {
    acum += numero
    return acum
  }, 0)
}
suma(4, 8, 12, 8954, 7, 9)

/* Primera versión doblar los numeros de un array
function dobles(...numeros){
  const resultado = []
  for(let i = 0; i < numeros.length; i++){
    resultado.push(numeros[i] * 2)
  }
  return resultado
}
dobles(3, 5, 10)
*/
const dobles = (...numeros) => numeros.map(numero => numero * 2)
dobles(3, 5, 10)

/* Primera versión para coger solo los numeros pares de un array
function pares(...numeros) {
  const resultado = []
  const length = numeros.length
  for(let i = 0; i < length; i++){
    const numero = numeros[i]
    if(numero % 2 == 0){
      resultado.push(numero) // .push Añade un elemento al Array
    }
  }
  return resultado
}
*/
const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)
