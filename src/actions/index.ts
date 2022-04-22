import { ActionCreator } from "@reduxjs/toolkit";
import getPersonajes from "../services/dataAPI";
import { actionType } from "./enum";
import {
  IFiltrarPersonajesAction,
  IFiltrarPersonajesErrorAction,
  IFiltrarPersonajesExitoAction,
  IFiltrarPersonajesThunkAction,
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
  info: any,
  personajes: Array<any>
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
      dispatch(FiltrarPersonajesExito(info, results));
    } catch (error) {
      dispatch(FiltrarPersonajesError(error));
    }
  };
};
