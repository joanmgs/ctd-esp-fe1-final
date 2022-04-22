import { Reducer } from "@reduxjs/toolkit";
import { TPersonajesAction } from "../actions/interfaces";
import { estadoInicial, IEstadoPersonaje } from "./initial";

const personajesReducer: Reducer<IEstadoPersonaje, TPersonajesAction> = (
  state = estadoInicial,
  action
): IEstadoPersonaje => {
  switch (action.type) {
    case "FILTRAR_PERSONAJES":
      return {
        ...state,
        busqueda: action.busqueda,
        status: "CARGANDO",
        error: null,
      };
    case "FILTRAR_PERSONAJES_EXITO":
      return {
        ...state,
        info: action.info,
        personajes: action.personajes,
        status: "COMPLETADO",
        error: null,
      };
    case "FILTRAR_PERSONAJES_ERROR":
      return {
        ...state,
        personajes: [],
        status: "COMPLETADO_CON_ERROR",
        error: action.error,
      };
    default:
      return state;
  }
};

export default personajesReducer;
