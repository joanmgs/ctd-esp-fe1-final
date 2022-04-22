import React from "react";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */
const PaginaFavoritos: React.FC = (): JSX.Element => {
  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
      </div>
      <GrillaPersonajes />
    </div>
  );
};

export default PaginaFavoritos;
