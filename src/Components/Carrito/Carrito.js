import "./Carrito.css";
import {Link} from "react-router-dom"

const cantidad_productos=0;


const Carrito = () => {
  return (
    <Link to={"cart"}>
      <p>🛒</p>
      <div className="contador">
        {cantidad_productos}
      </div>
    </Link>
  )
}
export default Carrito;

