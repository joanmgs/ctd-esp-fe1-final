import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { IPersonaje } from "../../actions/interfaces";
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
  let { personajes, status, favoritos } = useSelector<IRootState, any>(
    (state) => state.personajesReducer
  );

  const { pathname } = useLocation();
  const pjs = pathname.includes("/favoritos") ? favoritos : personajes;

  if (pjs) {
    if (status === "CARGANDO" && pjs.length === 0)
      return <h1>Ingresa tu busqueda</h1>;
    if (status === "CARGANDO" && pjs.length > 0)
      return <h1>Cargando...</h1>;
  } else {
    return <h1> 404 - NOPE, no hay personajes que coincidan </h1>;
  }

  return (
    <div className="grilla-personajes">
      {pjs.map((personaje: IPersonaje) => {
        return (
          <TarjetaPersonaje
            personaje={personaje}
            key={personaje.created + personaje.id}
          />
        );
      })}
    </div>
  );
};

export default GrillaPersonajes;
