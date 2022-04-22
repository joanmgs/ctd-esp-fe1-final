import { ActionCreator } from "@reduxjs/toolkit";
import getPersonajes from "../services/dataAPI";
import { actionType } from "./enum";
import {
  IFiltrarPersonajesAction,
  IFiltrarPersonajesErrorAction,
  IFiltrarPersonajesExitoAction,
  IFiltrarPersonajesThunkAction,
  IInfo,
  IPersonaje,
} from "./interfaces";

const FiltrarPersonajes: ActionCreator<IFiltrarPersonajesAction> = (
  busqueda: string
) => {
  return {
    type: actionType.FILTRAR_PERSONAJES,
    busqueda,
  };
};

const FiltrarPersonajesExito: ActionCreator<IFiltrarPersonajesExitoAction> = (
  info: IInfo,
  personajes: Array<IPersonaje>
) => {
  return {
    type: actionType.FILTRAR_PERSONAJES_EXITO,
    info,
    personajes,
  };
};

const FiltrarPersonajesError: ActionCreator<IFiltrarPersonajesErrorAction> = (
  error: string
) => {
  return {
    type: actionType.FILTRAR_PERSONAJES_ERROR,
    error,
  };
};

export const FiltrarPersonajesThunk = (
  busqueda: string,
  url?: string
): IFiltrarPersonajesThunkAction => {
  return async (dispatch, getState) => {
    dispatch(FiltrarPersonajes(busqueda));
    try {
      const { info, results } = await getPersonajes(busqueda, url);
      const personajesFavoritos = getState().personajesReducer.favoritos;

      if (personajesFavoritos.length > 0) {
        personajesFavoritos.forEach((personajeFavorito) => {
          results.map((personaje: any) => {
            if (personaje.id === personajeFavorito.id) {
              personaje.isFavorite = true;
            }
            return personaje;
          });
        });
      }

      dispatch(FiltrarPersonajesExito(info, results));
    } catch (error) {
      dispatch(FiltrarPersonajesError(error));
    }
  };
};
