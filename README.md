# React + Vite
# Proyecto de FrontEnd III

## Paso 1 - Inicializamos una aplicación con vite
npm create vite@latest <nombreproyecto>
##Paso 2 - Construimos un componente <Card/>
En primer lugar, vamos a crear un archivo Card.jsx en donde crearemos nuestro primer componente, con un breve mensaje que nos permita visualizarlo en la aplicación:
import React from "react";

const Card = () => {
  return <div>Hola, soy una tarjeta</div>;
};

export default Card

Se pueden agregar estilos y más información; lo esencial acá es poder repasar el concepto de componente y JSX. Luego, vamos a importar el componente en nuestro componente <App/> para poder ver cómo él mismo aparece en la pantalla:
import React from "react";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
En este punto, la idea es repasar el concepto de componente padre e hijo y cómo se maneja este tipo de arquitectura en una aplicación hecha con React. También podemos agregar alguna prop al componente Card y pasarla cuando lo utilizamos en el componente App, para repasar el concepto y utilización de props.
Paso 3 - Agregamos un formulario
Finalmente, lo que vamos a hacer es agregar un componente form dentro de <App/>:
import React from "react";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form></form>
      <Card />
    </div>
  );
}

export default App;

