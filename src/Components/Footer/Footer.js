
import "./Footer.css";
import nequi from "../Images/nequi.svg"
import scoti from "../Images/scotiabank.svg"
import whatsapp from "../Images/whatsapp.svg"

const Footer = () => {
  return (
    <div className ="footer_div">
      <h3>Medios de Pago</h3>
      <div className="medios_pago">
        <div className="nequi_div">
          <h4>Nequi</h4>
          <p>
            Para realizar el pago a traves de nequi debes hacer tu transferencia
            al 3105695335
          </p>
          <img src={nequi} className="logo_nequi" alt="Logo de nequi"></img>
        </div>

        <div className="transfer_div">
          <h4>Transferencia</h4>
          <p>
            Envia tu pago a la cuenta numero 1001486981, Banco Scotiabank
            Colpatria, si necesita mas informacion comuniquese con el numero de
            whatsapp.
          </p>
          <img
            src={scoti}
            className="logo_scoti"
            alt="Logo de Scotiabank Colpatria"
          ></img>
        </div>

        <div className="whatsapp_div">
          <a href="https://wa.me/+573025997912?text=Accesorios Tizalea, la mejor tienda online de crochet, si deseas comunicarte con nosotros por favor ingresa a este link de Whatsapp, en caso tal de no encontrarnos disponibles, realizaremos la llamada al numero que tengamos registrado, en la mayor brevedad posible. Horarios de atencion: Lunes a Sabado de 9 am a 5 pm, exceptuando festivos. ">
            <img
              src={whatsapp}
              className="logo_whatsapp"
              alt="Logo de Whatsapp"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
