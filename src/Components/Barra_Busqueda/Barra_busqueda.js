import React, { useState }   from 'react'
import "./Barra_busqueda.css";

function Barra_busqueda() {
  const [textoBusqueda, setTextoBusqueda] = useState('');

  const handleChange = (event) => {
    setTextoBusqueda(event.target.value);
  };

  return (
    <div className="contenedor_busqueda"> 
      <p>🔍</p>
      <input type="text" value={textoBusqueda} onChange={handleChange} placeholder="¿Que producto desea?" />
      <button>Buscar</button>
    </div>
  );
}

export default Barra_busqueda;
