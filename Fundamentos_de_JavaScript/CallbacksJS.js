// Ejemplo 1 -->
setTimeout(function callback() {
  console.log('A');
}, 0)

console.log('B');

// Ejemplo 2 -->
setTimeout(function callback() {
  console.log('A');
}, 1000) // <-- es un tiempo minimo, JS puede no respetarlo

for(let i=0; i < 9999999999; i++);

console.log('B');
