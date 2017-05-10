Primeros pasos con Angular

Angular 2 nació de un equipo de ingenieros de Google, como un framework para construir aplicaciones universales, esto quiere decir aplicaciones que funcionen en web, desktop y móviles.

¿Qué cambio desde Angular.js a Angular 2?

A pesar que el enfoque sigue siendo Single Page Applications, Angular sufrió un par de cambios:

a) Su core ahora está construido con RxJS y TypeScript ( Recuerda que tenemos una guía sobre este superset ), que asegura su velocidad y modularidad. Ya no tendremos cambios grandes como lo fue de Angular.js a Angular 2, ahora tendremos semantic versions que serán retrocompatibles.

b) El enfoque son los componentes, haciendo que tengas UI retutilizables.

Hola Mundo con Angular CLI

Los CLI ( command line interface ) son herramientas que nos ayudan a simplificar ciertas tareas que tendríamos que hacer de manera manual con algún framework / librería / software. En el caso de Angular, nos proporciona herramientas que van desde crear un proyecto desde cero hasta un servidor local para pruebas.

Para instalar Angular CLI debemos tener previamente instalado Node.js y ejecutar el siguiente comando:

npm install -g @angular/cli

Ya instalado Angular CLI podemos crear proyecto de manera más sencilla sin tener que crear todos los archivos de manera manual. Vamos a crear nuestro Hola Mundo, lo primero que tenemos que hacer es pararnos en la carpeta donde deseamos tener nuestro proyecto y después ejecutar la siguiente linea:

ng new NombreDelProyecto

La espera dependerá entre muchas cosas de tu conexión a internet, pero no te preocupes, el angular cli nos notificará cuando el proyecto esté listo para usar.

1.png
Pero, ¿Cómo ejecutamos un Hola Mundo?, eso es muy sencillo, dentro de angular cli contamos con una herramienta que nos va a ayudar a lenvantar un servidor local con nuestro proyecto. Para hacer uso de la herramientas necesitamos esta dentro de la carpeta de proyecto (/NombreDeProyecto) y ejecutar lo siguiente:

ng serve

2.png
Y listo, al ingresar la dirección local propuesta por el CLI observaremos que nuestro proyecto se creo correctamente y podemos empezar a trabajar con el. “Hola al Mundo de Angular 2”

3.png
Estructura de una aplicación en Angular

Para iniciar a entender como funciona una aplicación en Angular iniciaremos por entender cuál es la estructura de un proyecto, notarás que desde el CLI se crearon algunos archivos y carpetas que quizás nunca habías visto, repasaremos desde los archivos más externos a los más internos.

4.png
Archivos de configuracion:

.editorconfig: Es la configuración para nuestro editor, pero realmente esto no se modifica
.gitignore: Angular CLI nos genera un cliente de git para poder trabajar de manera versionada en nuestro proyecto y después subirlo a Github por ejemplo, existen archivos que no valen la pena tenerlos en cada versión local y es aquí donde ignoramos esos archivos.
angular-cli.json: Aquí es donde consultamos la configuración del CLI.
karma.conf.js: Es el archivo de configuración para los test
package.json: Es la configuración que describe las dependencias que necesitamos de Node.js
protractor.conf.js: Es la configuración de los test e2e con Jasmine
README.md: Es el readme que tiene cualquie proyecto compartido en github, pero en este caso puedes encontrar una guia de los comandos de Angular CLI
tslint.json:Es la configuración del Linter para typescript, realmente no es necesario modificarlo.

/e2e

Los archivos dentro de e2e describen un tipo de testing llamado End to End, esto se ejecuta con la ayuda de Jasmine.

Captura de pantalla 2017-02-16 a la(s) 19.33.46.png
/node_modules

Es donde se encuentran todas nuestras dependencias de Node.js de nuestro proyecto

Captura de pantalla 2017-02-16 a la(s) 19.39.28.png
/src

Está quizás es la carpeta más importante de todas y donde estarás la mayor parte de tu tiempo ya que en ella se encuentra todo el código de la aplicación

Captura de pantalla 2017-02-16 a la(s) 19.42.20.png
Vamos a detalles todo lo que compone la carpeta /src.

/app

En esta carpeta y por carpetas, es donde vamos a tener todos nuestros componentes, servicios y aquellos elementos que tengan que ver con las vista de nuestra aplicación, no te preocupes, más adelante explicaremos todos los elementos que tienen un componente en Angular.

/assets

En esta carpeta tendremos aquellos assets que no sean propios de un componente en Angular como imágenes, videos o archivos de cualquier tipo.

/environments

Nos permite modificar el entorno de trabajo en el que estamos, por lo tanto, cuando lleves algo a producción, modificaremos los respectivos archivos de TypeScript

favicon.icon

Puedes sustituirlo por el icono de tu preferencia para obtener un resultado como:

Captura de pantalla 2017-02-16 a la(s) 22.57.11.png
index.html

Este es el HTML principal y es donde va a existir nuestra Single Web Application

main.ts

Es el primer archivo en ejecutarse, en el se encuentran todos los parametros de configuración la de aplicación como el entorno en el que trabajamos, en que archivo tenemos declarados todos nuestros componentes, etc.

polyfills.ts

Este archivo nos asegura que tendremos compatibilidad en todos los navegadores modernos.

styles.css

Son los estilos generales del proyecto

test.ts

Aquí podemos seguir agregando tests unitarios a nuestros componentes

tsconfing.json

Si recuerdas el artículo de typescript, este es el archivo de configuración propio del superset.

¿Cómo funciona un componente en Angular?

Nos faltó entender que hay dentro de /app, pero esto va muy mano de como esta compuesto un componente en Angular. Un componente en Angular tiene 3 partes:

Un template o estructura HTML
Una hoja de estilos CSS propia del componente
Toda la funcionalidad del componente usando TypeScript ( aunque tambien podría usar JS )
Es importante que los nombres de los archivos sean del tipo nombre.component.extensión:

Captura de pantalla 2017-02-17 a la(s) 11.44.40.png
Aclarado lo anterior quizás ya te diste cuenta que /app es un componente. Veamos el archivo que describe la funcionalidad app.component.ts :

import { Component } from '@angular/core';  // Importamos la funcionalidad de compontente del core de Angular 

@Component({					   // Este annotation nos ayuda a la configuración del componente, entre ellos: 
  selector: 'app-root',				   // En que selector se va a renderizar 
  templateUrl: './app.component.html',       // En que ruta esta su template 
  styleUrls: ['./app.component.css']            // En que ruta se encuentra su hoja de estilos 
})
export class AppComponent {                  // La clase que vamos a exportar le dará vida a nuestros componente, podemos tener incluso variables y 
  title = 'app works!';		                           // funciones queramos usar en nuestros HTML ya montado 
}
Nuestro template en este ejemplo no tiene más que:

<h1>
  {{title}}
</h1>

Y la hoja de estilos no tienen nada por el momento. Bueno, entonces: ¿Dónde termina nuestro componente?, recordemos que tenemos nuestro index.html:

Captura de pantalla 2017-02-17 a la(s) 12.02.13.png
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Hello</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
    <app-root>Loading...</app-root>   // ¿Recuerdas el selector que declaramos en el componente?, es para que ahí se haga el render 
</body> 
</html>

¿Qué otro archivo nos faltó? Nuestro app.module.ts

Este archivo es el encargado de entender que componentes y dependencias tenemos en nuestra aplicación. Por cierto, cada vez que tu creas un componente nuevo, debes declararlo en este archivo.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

Y listo, así aprendiste a hacer tu primer componente en Angular. Te voy a dejar un desafío: Sin usar el Angular CLI, deberás crear un nuevo componte en esta aplicación que se llame Platzi y debe estar debajo de <app-root>Loading…</app-root>
