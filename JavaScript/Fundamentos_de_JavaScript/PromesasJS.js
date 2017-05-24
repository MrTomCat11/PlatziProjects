// Ejemplo 1 -->
const promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    reject(new Error('Se produjo un error'))
  }, 1000)
})

promise
  .then(function(){

  })
  .catch(function(err){

  })

// Ejemplo 2 -->
function get(URL) {
  return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      const DONE = 4
      const OK = 200
      if(this.readyState === DONE){
        resolve(JSON.parse(this.responseText))
      } else {
        reject(new Error(`Se produjo un error al realizar el request: ${this.status}`))
      }
    }
    xhr.open('GET', URL);
    xhr.send(null);
  })
}

function handleError(err){
  console.log(`Request failed: ${err}`)
}

let luke

get('http://swapi.co/api/people/1/')
  .then((response) => {
    luke = response
    return get(luke.homeworld)
  })
  .then((homeworld) => {
    luke.homeworld = homeworld
    console.log(`${luke.name} nació en ${luke.homeworld.name}`)
  })
  .catch((err) => handleError(err))

// Ejemplo 3 --> fetch nos devuelve una promesa
function handleError(err) {
  console.log(`Request failed: ${err}`);
}

let luke

fetch('http://swapi.co/api/people/1/')
  .then(response => response.json())
  .then((json) => {
    luke = json
    return fetch(luke,homeworld)
  })
  .then(response => response.json())
  .then((json) => {
    luke.homeworld = json
    console.log(`${luke.name} nacio en ${luke.homeworld.name}`);
  })
  .catch(err => handleError(err))
