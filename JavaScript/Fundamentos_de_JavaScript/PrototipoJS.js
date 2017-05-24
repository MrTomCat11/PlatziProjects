// Primera forma de crear Objetos
//////////// INICIO DEL PROTOTIPO //////////////
// Este es el constructor del Prototipo
function Punto(x, y){
  this.x = x;
  this.y = y;
}
// Estos son los metodos del Prototipo
Punto.prototype.moverEnX = function moverEnX(x) {
  this.x += x
}
Punto.prototype.moverEnY = function moverEnY(y) {
  this.y += y
}
Punto.prototype.distancia = function distancia(p) {
  const x = this.x - p.x
  const y = this.y - p.y
  return (Math.sqrt(x*x + y*y)).toFixed(2)
}

//////////// FIN DEL PROTOTIPO //////////////

const p1 = new Punto(0,4);
const p2 = new Punto(3,0);

console.log(p1.distancia(p2));
console.log(p2.distancia(p1));
p1.moverEnX(10)
console.log(p1.distancia(p2));
p2.moverEnY(-4)
console.log(p1.distancia(p2));


// NOTA IMPORTANTE: Si se modifica el Prototipo desde una variable digamos p1
// cambia el Prototipo en todos los objetos que sean de ese Prototipo
