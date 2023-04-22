import "./App.css";
import Producto from "./Components/producto";

function App() {
  const productos = [
    {
      titulo: "Bolso 1",
      descripcion: "Bolso de color morado",
      precio: "20",
      source:
        "https://images.pexels.com/photos/14629530/pexels-photo-14629530.jpeg",
      alter:"Bolso de color morado",
    },
    {
      titulo: "Bolso 2",
      descripcion: "Bolso de color rojo",
      precio: "25",
      source:
        "https://images.pexels.com/photos/9077989/pexels-photo-9077989.jpeg",
      alter:"Bolso de color rojo",
    },
    {
      titulo: "Bolso 3",
      descripcion: "Bolso de color azul",
      precio: "30",
      source:
        "https://images.pexels.com/photos/13924892/pexels-photo-13924892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alter:"Bolso de color azul",  
    },
    {
      titulo: "Bolso 4",
      descripcion: "Bolso de color negro",
      precio: "35",
      source:
        "https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alter:"Bolso de color negro",
    },
    {
      titulo: "Bolso 5",
      descripcion: "Bolso de color Naranja",
      precio: "30",
      source:
        "https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alter:"Bolso de color Naranja",
    },
    {
      titulo: "Bolso 5",
      descripcion: "Bolso de color Naranja",
      precio: "30",
      source:
        "https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alter:"Bolso de color Naranja",
    },
    {
      titulo: "Bolso 5",
      descripcion: "Bolso de color Naranja",
      precio: "30",
      source:
        "https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alter:"Bolso de color Naranja",
    },
    {
      titulo: "Bolso 5",
      descripcion: "Bolso de color Naranja",
      precio: "30",
      source:
        "https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alter:"Bolso de color Naranja",
    },
  ];
  return (
    <div className="App">
      <header>
        <div className="info_contacto">
          <h2>Llamanos</h2>
          <h3>601-2507827</h3>
        </div>
        <h1>Bolsos Tejidos</h1>
        <p className="carrito">Carrito</p>
      </header>

      <h2>Nuestros Productos</h2>
      <div className="links_info">
        <a href="/">Ofertas</a>
        <a href="/">Tarjetas Regalo</a>
        <a href="/">Cobertura</a>
      </div>


      <div className="container_productos">
        {productos.map((producto) => (
          <Producto
            key={producto.titulo}
            titulo={producto.titulo}
            descripcion={producto.descripcion}
            precio={producto.precio}
            source={producto.source}
            alter={producto.alter}
          />
        ))}
      </div>

      <div>
        <h3>Medios de Pago</h3>
        
      </div>
    </div>
  );
}

export default App;
