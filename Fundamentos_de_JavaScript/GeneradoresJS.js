function* fibonacci() {
  let a = 0, b = 1

  while (true) {
    let f = a
    a = b
    yield f // bloquea la ejecucion y devuelve el valor f
    // cuando se le da .next() continua desde aqui.
    if(reset) a = 0, b = 1
  }
}
