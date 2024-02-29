import { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Card from "./components/card/Card";

function App() {
  const [mensaje, setMensaje] = useState(false);
  const [nombre, setNombre] = useState("");
  const [mascota, setMascota] = useState("");
  return (
    <>
      <Form
        setMensaje={setMensaje}
        setNombre={setNombre}
        setMascota={setMascota}
      />
      {mensaje && <Card nombre={nombre} mascota={mascota} />}
    </>
  );
}

export default App;
