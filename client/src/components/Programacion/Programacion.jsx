import { LuConstruction } from "react-icons/lu";
import { Link } from "react-router-dom";

function Programacion() {
  return (
    <>
      <LuConstruction className="icon__programming" />
      <p> En construcción </p>
      <Link to="/">
        <button className="btn__programming"> Volver al inicio </button>
      </Link>
    </>
  );
}

export default Programacion;
