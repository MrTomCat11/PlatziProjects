const nacimiento = new Date(1995,6,27)
const hoy = new Date()
const tiempo = hoy - nacimiento // milisegundos
const tiempoSegundos = tiempo / 1000
const tiempoMin = tiempoSegundos / 60
const tiempoHoras = tiempoMin / 60
// proximo cumpleaños
const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado"
]

console.log(diasSemana[proximo.getDay()])
