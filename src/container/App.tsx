import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/App.css";
import PaginaInicio from "../paginas/Inicio.pagina";
import PaginaFavoritos from "../paginas/Favoritos.pagina";
import PaginaDetalle from "../paginas/Detalle.pagina";
import Encabezado from "../componentes/layout/encabezado.componente";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Encabezado />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="favoritos" element={<PaginaFavoritos />} />
        <Route path="detalle" element={<PaginaDetalle />} />
      </Routes>
    </div>
  );
};

export default App;
