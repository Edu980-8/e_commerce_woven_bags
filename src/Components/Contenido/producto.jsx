
import "./producto.css";

function Producto({ titulo, descripcion, precio, source,alter}) {
  return (
    <div className="producto">
      <img className="imagen" src={source} alt={alter}/>
      <div className="info">
        <h3 className="titulo">{titulo}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio}</p>
        <button className="boton">Agregar al carrito</button>
      </div>
    </div>
  );
}

export default Producto;
