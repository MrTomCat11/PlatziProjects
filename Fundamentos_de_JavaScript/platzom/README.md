# platzom

platzom es un idioma inventado por el [Curso de Fundamentos de JavaScript](https://platzi.com/js)

## Descripcion del idioma

- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por mitad y unir con un guión medio
- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y minúsculas

## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'
platzom("Programar") // Program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarpe
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMoS
```

## Créditos

- [Javier Alejandro Pérez](https://twitter.com/MrTomCat11)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
