// Debounce ejecuta una funcion cada x tiempo
function debounce(func, wait) { // debounce (funcion, timeout)
  let timeout
  return function (...params) {
    let _this = this
    let later = function () {
      timeout = null
      func.apply(_this, params)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function onscroll(ev) {
  console.log('El usuario hizo scroll');
}

window.addEventListener('scroll', debounce(onscroll, 250))
