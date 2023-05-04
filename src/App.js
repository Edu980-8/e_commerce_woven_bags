import "./App.css";

import { BrowserRouter, Routes, Route} from "react-router-dom";


import Home from "./Components/Home/Home";
import Lista_Carrito from "./Components/Carrito/Lista_Carrito";


function App() {
  
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Lista_Carrito/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;


