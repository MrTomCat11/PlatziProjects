// ***** Primera caracteristica de Bind ****
class Toggable {
  constructor(el) {
    // inicializar
    this.el = el
    this.el.innerHTML = 'Off'
    this.activated = false
    /* el .bind es necesario para que addEventListener coja
    este objeto y no lo que el crea que es this.*/
    this.el.addEventListener('click', this.onClick.bind(this))
  }

  onClick(ev){
    this.activated = !this.activated // Cambiar estado interno
    this.toggleText() // llamar a toggleText
  }

  toggleText(){
    this.el.innerHTML = this.activated ? 'On' : 'Off'
  }
}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)

// ***** Otra caracteristica de Bind ****
function saludar(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}`);
}
saludar("Javier","Perez")
const saludarJaviers = saludar.bind(null, "Javier")
saludarJaviers("Perez")
saludarJaviers("Gomez")
