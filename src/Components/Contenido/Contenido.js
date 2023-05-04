
import Producto from "./producto";
import "./Contenido.css";

import bolsa_ecologica from "../Images/bolsas_ecologicas.png"
import bolso_cafe_tejido from "../Images/bolso_cafe_tejido.jpeg"
import bolsa_cafe_tela from "../Images/Bolsa_cafe_tela.png"
import bolsa_blanca_tela from "../Images/Bolsa_blanca_tela.png"
import morral_pequeño from "../Images/morral_pequeño.jpeg"
import bolsa_roja_tela from "../Images/Bolsa_roja_tela.png"
import bolsa_blanca_roja_tela from "../Images/Bolsa_blanca_roja_tela.png"
import bolso_amarillo from "../Images/Bolso_amarillo.png"
import bolso_fuccia from "../Images/Bolso_fuccia.png"
import Bolso_morado_rosado from "../Images/Bolso_morado_rosado.png"
import forro_licuadora from "../Images/Licuadora_forro.png"
import bandana from "../Images/Bandanas.jpeg"
import maleta_chiquita from "../Images/Maletas_Chiquitas.png"
import moñas from "../Images/moñas.jpeg"
import tarjeteros from "../Images/tarjeteros.jpeg"

const Contenido = () => {
  const productos = [
    {
      titulo: "Bolsas Ecológicas",
      descripcion: "Bolsas realizadas en tela antifluidos",
      precio: "15.000",
      source: bolsa_ecologica,
      alter: "Bolso de color morado",
    },
    {
      titulo: "Bolso Cafe Tejido",
      descripcion: "Bolso a base de hilo crochet de algodon.",
      precio: "30.000",
      source: bolso_cafe_tejido,
      alter: "Bolso de color rojo",
    },
    {
      titulo: "Bolsa Ecológica Cafe Tela",
      descripcion:
        "Bolsa doble faz a base de tela, con encaje y tirantes de caucho, aptos para cargar 3kg.",
      precio: "28.000",
      source: bolsa_cafe_tela,
      alter: "Bolsa cafe de tela",
    },
    {
      titulo: "Bolsa Ecológica Blanca Tela",
      descripcion:
        "Bolsa doble faz a base de tela, con tirantes de caucho, aptos para cargar 3kg.",
      precio: "28.000",
      source: bolsa_blanca_tela,
      alter: "Bolsa blanca de tela",
    },
    {
      titulo: "Morral pequeño ",
      descripcion: "Morral pequeño color azul y salmon en hilo crochet",
      precio: "20.000",
      source: morral_pequeño,
      alter: "Bolso de color aguamarina con color salmon",
    },
    {
      titulo: "Bolsa Ecológica Roja Tela",
      descripcion:
        "Bolsa doble faz a base de tela, con tirantes de caucho, aptos para cargar 3kg.",
      precio: "28.000",
      source: bolsa_roja_tela,
      alter: "Bolso de color Rojo",
    },
    {
      titulo: "Bolsa Ecológica Blanca Tela",
      descripcion:
        "Bolsa doble faz a base de tela, con tirantes de caucho, aptos para cargar 3kg.",
      precio: "28.000",
      source: bolsa_blanca_roja_tela,
      alter: "Bolso de color Blanco con Rojo",
    },
    {
      titulo: "Bolso amarillo",
      descripcion:
        "Bolso pequeño color amarillo y con franja azul en hilo crochet",
      precio: "20.000",
      source: bolso_amarillo,
      alter: "Bolso de color amarillo tejido",
    },
    {
      titulo: "Morral Fuccia Tejido",
      descripcion: "Morral a base de hilo crochet de algodon.",
      precio: "20.000",
      source: bolso_fuccia,
      alter: "Bolso de color Fuccia",
    },
    {
      titulo: "Bolso morado con rosado",
      descripcion: "Morral a base de hilo crochet de algodon.",
      precio: "25.000",
      source: Bolso_morado_rosado,
      alter: "Bolso de color morado con rosado",
    },
    {
      titulo: "Forro para licuadora",
      descripcion: "Forro para licuadora a base de hilo crochet de algodon.",
      precio: "20.000",
      source: forro_licuadora,
      alter: "Forro para licuadora.",
    },
    {
      titulo: "Bandanas ",
      descripcion: "Bandanas a base de hilo crochet de algodon.",
      precio: "15.000 c/u",
      source: bandana,
      alter: "Bandas para el pelo. Tejidas en crochet.",
    },
    {
      titulo: "Maleticas Chiquitas ",
      descripcion: "Maletas pequeñas tejidas en crochet.",
      precio: "8.000 c/u",
      source: maleta_chiquita,
      alter: "Maletas pequeñas tejidas en crochet-",
    },
    {
      titulo: "Sombreritos",
      descripcion:
        "Sombreritos multiusos, para guardar labiales, encendedores, etc.",
      precio: "10.000 c/u",
      source: bandana,
      alter: "Bandas para el pelo. Tejidas en crochet.",
    },
    {
      titulo: "Moños ",
      descripcion:
        "Moñas multicolor a base de hilo crochet de algodon para recoger el cabello.",
      precio: "5.000 c/u",
      source: moñas,
      alter: "Moños multicolor a base de hilo crochet de algodon.",
    },
    {
      titulo: "Carpetas",
      descripcion: "Carpetas a base de algodon para decoracion de su hogar.",
      precio: "15.000 c/u",
      source: bandana,
      alter: "Bandas para el pelo. Tejidas en crochet.",
    },
    {
      titulo: "Tarjeteros",
      descripcion: "Tarjeteros realizados en hilo  de algodon crochet.",
      precio: "10.000 c/u",
      source: tarjeteros,
      alter: "Bandas para el pelo. Tejidas en crochet.",
    },
    {
      titulo: "Aretes ",
      descripcion: "Aretes en hilo de diferentes colores",
      precio: "15.000 c/u",
      source: bandana,
      alter: "",
    },
  ];
  return (
    <div className="contenedor_productos">
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
  );
};

export default Contenido;
