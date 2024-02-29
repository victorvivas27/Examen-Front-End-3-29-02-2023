import { useState } from "react";
import "./Form.css";

const Form = ({ setMensaje, setNombre, setMascota }) => {
  const [datos, setDatos] = useState({ nombre: "", mascota: "" });
  const [error, setError] = useState(false);

  const onChangeNombre = (evento) =>
    setDatos({ ...datos, nombre: evento.target.value });
  const onChangeMascota = (evento) =>
    setDatos({ ...datos, mascota: evento.target.value });

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    if (datos.nombre.trim().length > 3 && datos.mascota.length > 6) {
      console.log("Formulario enviado: ", datos);
      setError(false);
      setMensaje(true);
      setNombre(datos.nombre);
      setMascota(datos.mascota);
    } else {
      console.log("Error en el formulario");
      setError(true);
      setMensaje(false);
    }
    setDatos({ nombre: "", mascota: "" });
  };

  return (
    <>
      <h1>Ingresa tu Mascota Favorita </h1>
      <div className="contenedor-form">
        <form className="form" onSubmit={manejarEnvio}>
          <label>Nombre:</label>
          <input type="text" value={datos.nombre} onChange={onChangeNombre} />
          <label>Mascota:</label>
          <input type="text" value={datos.mascota} onChange={onChangeMascota} />
          {error && (
            <p style={{ color: "red" }}>
              Por favor chequea que la información sea correcta
            </p>
          )}
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Form;
