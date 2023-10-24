import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import PaginaContatos from "./components/PaginaContatos";
import PaginaDestinos from "./components/PaginaDestinos";
import PaginaSobre from "./components/PaginaSobre";
import Ubatuba from "./components/Ubatuba";
import CostaCorais from "./components/CostaCorais";
import Eua from "./components/Eua (1)";
import Grecia from "./components/Grecia";
import Hungria from "./components/Hungria";
import Italia from "./components/Italia";
import Maldivas from "./components/Maldivas";
import Turquia from "./components/Turquia";
import Floarianolis from "./components/Florianopolis";
import FernandoNoronha from "./components/FernandoNoronha";
import PortoGalinhas from "./components/PortoGalinhas";
import { Capitolio } from "./components/Capitilio";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<PaginaSobre />} />
        <Route path="/contatos" element={<PaginaContatos />} />
        <Route path="/destinos" element={<PaginaDestinos />} />
        <Route path="/consta-corais" element={<CostaCorais />} />
        <Route path="/ubatuba" element={<Ubatuba />} />
        <Route path="/costa-corais" element={<CostaCorais />} />
        <Route path="/estados-unidos" element={<Eua />} />
        <Route path="/fernando-noronha" element={<FernandoNoronha />} />
        <Route path="/grecia" element={<Grecia />} />
        <Route path="/hungria" element={<Hungria />} />
        <Route path="/italia" element={<Italia />} />
        <Route path="/maldivas" element={<Maldivas />} />
        <Route path="/turquia" element={<Turquia />} />
        <Route path="/capitolio" element={<Capitolio />} />
        <Route path="/florianopolis" element={<Floarianolis />} />
        <Route path="/porto-galinhas" element={<PortoGalinhas />} />
      </Routes>
    </>
  );
}

export default App;
