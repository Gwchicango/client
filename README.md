# Rick and Morty App

Este proyecto es una aplicación web que muestra información sobre los personajes y episodios de la serie Rick and Morty. La aplicación permite buscar y filtrar personajes y episodios utilizando una barra de búsqueda y opciones de filtro.

## Pasos para instalar y ejecutar el proyecto localmente

1. Clona el repositorio:
   ```sh
   https://github.com/Gwchicango/client.git

2. Navega al directorio del proyecto:
    cd client

3. Instala las dependencias:
    npm install

4. Ejecuta la aplicación en modo de desarrollo:
    npm start
    Abre http://localhost:3000 para ver la aplicación en tu navegador.

## Tecnologías utilizadas
* React
* React Router DOM
* Heroicons
* React Icons
* Babel
* Tailwind

## Enlace al proyecto publicado en GitHub Pages
https://gwchicango.github.io/client/

## Desafíos enfrentados y cómo los solucionaste
### Desafío 1: Manejo de la paginación en la API
Para obtener todos los personajes de la API, fue necesario manejar la paginación. Implementé una función que realiza múltiples solicitudes a la API hasta obtener todos los personajes.

### Desafío 2: Mostrar correctamente el pie de página
El pie de página no se mostraba correctamente en algunas páginas. Para solucionarlo, ajusté el diseño del contenedor principal para que ocupe toda la altura de la pantalla y aseguré que el pie de página se posicione al final.

### Desafío 3: Filtrado y búsqueda de personajes y episodios
Implementé una barra de búsqueda con opciones de filtro que permite a los usuarios buscar y filtrar personajes y episodios de manera eficiente. Utilicé useState y useEffect para manejar el estado y los efectos secundarios

## Scripts disponibles
En el directorio del proyecto, puedes ejecutar:
1. npm start
    Ejecuta la aplicación en modo de desarrollo.
    Abre http://localhost:3000 para verla en tu navegador.

2. npm run build
    Construye la aplicación para producción en la carpeta build.
    Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

3. npm run deploy
Despliega la aplicación en GitHub Pages.

## Librerías instaladas
npx create-react-app client
npm install web-vitals
npm install react-router-dom
npm install @heroicons/react@v1
npm install react-icons
npm install --save-dev @babel/plugin-proposal-private-property-in-object
npm install gh-pages --save-dev
npm install --save-dev jsdoc

