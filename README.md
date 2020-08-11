# Prueba para Izertis

Proyecto realizado por Jesús María Gómez Márquez para la empresa Izertis.

Es una app donde se crean unos 4000 registros que se muestran de manera escalonada a medida que se va realizando un scroll vértical y que posee una barra de búsqueda para filtrar resultados, ya sea por la id de los mismos o por el texto.

## Características

  - Ionic CLI: 5.4.16 
  - Ionic Framework: @ionic/angular 5.3.1
  - NodeJS : v12.13.1
  - npm    : 6.12.1

## Estructura del proyecto

### Paginas

 - Home: página inicial de la aplicación donde se muestra todo el contenido de la misma

### Componentes

 - Search-bar: barra de búsqueda de elementos
 - Loading-bar: barra de progreso de los elementos creados
 - Card-list: listado de cards con la información de cada elemento
 - Card: card donde se muestra la imagen y el texto de cada elemento

### Servicios

- Elements: servicio que gestiona la creación y la consulta del listado de todos los elementos a mostrar
- Lorem-ipsum: servicio que se conecta con la Api que debuelve un párrafo de manera aleatoria.
- Toast: servicio que permite mostrar un toast en la aplicación

### Interfaces

 - Element-picsum: para cada uno de los elementos mostrados
 - Progress-element: para la barra de progreso

### Comandos

- Arrancar el proyecto en local
```sh
$ npm run start
```
- Build del proyecto
```sh
$ npm run build
```
- Lanzar los test unitarios
```sh
$ npm run test
```

### Consultas

Para cualquier consulta de este repositorio contacte con jesusmariagomezmarquez@gmail.com
