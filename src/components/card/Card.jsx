import "./Card.css";

const Card = ({ nombre, mascota }) => {
  return (
    <div className="card">
      <h2>
        Hola <strong>{nombre}</strong> !
      </h2>
      <h3 style={{ color: "#48de0d" }}>Tu mascota favorita es:</h3>
      <h4>{mascota}</h4>
    </div>
  );
};

export default Card;
