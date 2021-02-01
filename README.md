# MarvelApp

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.


## Instalando angular

Para poder usar el proyecto se necesita el CLI de angular, los pasos para instalarlo son los siguientes:

- Instalar [node](https://nodejs.org/es/) 

- Con [npm](https://www.npmjs.com/) instalar el [CLI de angular](https://github.com/angular/angular-cli).

```bash
npm install -g @angular/cli
```

- De forma opcional se puede instalar [git](https://git-scm.com/) para clonar el repositorio directamente.

```bash
git clone https://github.com/moronjesus/angular-marvel-app.git
```


## Servidor de desarrollo

Ejecute 
```bash
ng serve
```

- para un servidor de desarrollo. Vaya a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

## Generador de código

Ejecute 
```bash
ng generate component component-name
``` 
- para generar un nuevo componente. También puede usar  
```bash
ng generate directive|pipe|service|class|guard|interface|enum|module.
```

## Construir el proyecto modo producción

Ejecute 
```bash

```  
- para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/` Use la 
```bash
`--prod`
``` 
- para una construcción de producción.


## Running unit tests

Ejecute 
```bash
ng test
```
- para ejecutar las pruebas unitarias a través de[Karma](https://karma-runner.github.io).

## Documentación técnica

- Generaremos la documentación técnica con la librería Compodoc. Esta librería recorrerá nuestro proyecto y nos generará cierto contenido, e integrará los comentarios que hayamos añadido.

![](https://github.com/moronjesus/angular-marvel-app/master/assets/imgCompodoc.png)

- Generaremos la documentación en la carpeta doc
- Ejectuta por debajo: `compodoc -p tsconfig.app.json src -d doc -o -s
```bash
npm run compodoc
```

- Generaremos la documentación y nos levantará un servidor para que podamos ver la documentación en el navegador: `http://127.0.0.1:8080`

## Further help

- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
