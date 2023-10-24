import "../components/Card.css";

import { Link } from "react-router-dom";

const Card = ({ foto, texto, titulo, destinos }) => {
  return (
    <div className="card">
      <img className="imgCard " src={`/imgBrasil/${foto}`} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{texto}</p>
        <Link className="App-link" to={destinos}>
          Veja mais
        </Link>
      </div>
    </div>
  );
};

export default Card;
