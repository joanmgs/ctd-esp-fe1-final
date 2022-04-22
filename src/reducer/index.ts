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
    case "AGREGAR_FAVORITO":
      return {
        ...state,
        personajes: state.personajes.map(personaje => {
          if (personaje.id === action.personaje.id) {
            personaje.isFavorite = true;
          }
          return personaje;
        }),
        favoritos: [...state.favoritos, action.personaje],
      };
    case "ELIMINAR_FAVORITO":
      return {
        ...state,
        personajes: state.personajes.map(personaje => {
          if (personaje.id === action.personaje.id) {
            personaje.isFavorite = false;
          }
          return personaje;
        }),
        favoritos: state.favoritos.filter( character => action.personaje.id !== character.id ),
      };
    default:
      return state;
  }
};

export default personajesReducer;
