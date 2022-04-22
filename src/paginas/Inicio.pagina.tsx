import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import React from "react";
import { useDispatch } from "react-redux";
import { FiltrarPersonajesThunk } from "../actions/FiltrarPersonajes";
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */
const PaginaInicio: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const handlerCleaner = () => {
    dispatch(FiltrarPersonajesThunk(""));
  };
  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={handlerCleaner}>Limpiar Búsqueda</button>
      </div>
      <Filtros />
      <Paginacion />
      <GrillaPersonajes />
      <Paginacion />
    </div>
  );
};

export default PaginaInicio;
