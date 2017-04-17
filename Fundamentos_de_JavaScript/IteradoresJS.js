function fibonacci() {
  let a = 0, b = 1

  return {
    next: function () {
      let f = a
      a = b
      b = f + b
      return { value:f, done:false }
    }
  }

}

const fibo = {nombre: 'Javier'}
fibo[Symbol.iterator] = fibonacci

/*
const fibo = fibonacci()

fibo.next().value // 0
fibo.next().value // 1
fibo.next().value // 1
fibo.next().value // 2
fibo.next().value // 3
fibo.next().value // 5
fibo.next().value // 8
*/

let i = 0
for (let value of fibo){
  console.log(value);
  i++
  if(i> 20) break
}
