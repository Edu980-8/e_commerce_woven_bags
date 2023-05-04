import "./Navbar.css";

import Barra_busqueda from "../Barra_Busqueda/Barra_busqueda";
import Carrito from "../Carrito/Carrito";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="info_contacto">
        <h2>Llamanos</h2>
        <h3> +57 302 5997912</h3>
      </div>

      <div className="nombre_Marca">
        <h1>T i z a l e a</h1>
        <h3>Tejidos y confecciones</h3>
      </div>

      <div className="div_carrito">
        <Carrito/>
      </div>
      <Barra_busqueda/>
    </div>
  );
};

export default Navbar;
