function fibonacci(num) {
  // Caso base o condicional para detener la recursividad
  if(num == 1) return 0
  if(num == 2) return 1
  // Es recursiva porque se llama a si misma
  return fibonacci(num - 1) + fibonacci(num - 2)
}

fibonacci(1)  // 0
fibonacci(2)  // 1
fibonacci(3)  // 1
fibonacci(4)  // 2
fibonacci(5)  // 3
fibonacci(6)  // 5
fibonacci(7)  // 8
fibonacci(8)  // 13
