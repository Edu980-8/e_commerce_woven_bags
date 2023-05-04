import "./Lista_Carrito.css"
const Lista_Carrito = () => {

  const elementos = [
    'Elemento 1',
    'Elemento 2',
    'Elemento 3',
    'Elemento 4',
    'Elemento 5',
  ];



  return (
    <div className="padre_lista">
      <h1 className="titulo_lista">Lista de Confirmación</h1>
      <div className='lista_carro'>
      <ul>
      {elementos.map((elemento) => (
        <li className="lista_confirmacion" key={elemento}>
          {elemento}
          <p>Precio:</p>
          <p>Cantidad:</p>
          <button className="boton_lista boton_lista_suma">+</button>
          <button className="boton_lista boton_lista_resta">-</button>
        </li>
      ))}
    </ul>
        
      </div>
      
    </div>
  )
}

export default Lista_Carrito
