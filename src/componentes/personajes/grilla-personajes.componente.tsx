import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */
const GrillaPersonajes: React.FC = (): JSX.Element => {
  let { personajes, status } = useSelector<IRootState, any>(
    (state) => state.personajesReducer
  );

  if (personajes) {
    if (status === "CARGANDO" && personajes.length === 0)
      return <h1>Ingresa tu busqueda</h1>;
    if (status === "CARGANDO" && personajes.length > 0)
      return <h1>Cargando...</h1>;
  } else {
    return <h1> 404 - NOP, no hay personajes que coincidan </h1>;
  }

  return (
    <div className="grilla-personajes">
      {personajes.map((personaje: any) => {
        return (
          <TarjetaPersonaje
            image={personaje.image}
            name={personaje.name}
            key={personaje.created + personaje.id}
          />
        );
      })}
    </div>
  );
};

export default GrillaPersonajes;
