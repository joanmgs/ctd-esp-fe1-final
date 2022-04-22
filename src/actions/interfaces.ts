import { Action, ThunkAction } from "@reduxjs/toolkit";
import { IRootState } from "../store";
import { actionType } from "./enum";

export interface IPersonaje {
  created: string;
  episode: Array<string>;
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  }
  name: string;
  origin: {
    name: string; 
    url: string;
  }
  species: string;
  status: string;
  type: string;
  url: string;
  isFavorite?: boolean;
}

export interface IInfo {
  count: number;
  next: string;
  pages: number;
  prev: string;
}

export interface IFiltrarPersonajesAction extends Action {
  type: actionType.FILTRAR_PERSONAJES;
  busqueda: string;
}

export interface IFiltrarPersonajesExitoAction extends Action {
  type: actionType.FILTRAR_PERSONAJES_EXITO;
  info: IInfo;
  personajes: Array<IPersonaje>;
}

export interface IFiltrarPersonajesErrorAction extends Action {
  type: actionType.FILTRAR_PERSONAJES_ERROR;
  error: string;
}

export interface IAgregarFavorito extends Action {
  type: actionType.AGREGAR_FAVORITO;
  personaje: IPersonaje;
}

export interface IEliminarFavorito extends Action {
  type: actionType.ELIMINAR_FAVORITO;
  personaje: IPersonaje;
}

export type TPersonajesAction =
  | IFiltrarPersonajesAction
  | IFiltrarPersonajesExitoAction
  | IFiltrarPersonajesErrorAction
  | IAgregarFavorito
  | IEliminarFavorito;

export interface IFiltrarPersonajesThunkAction
  extends ThunkAction<void, IRootState, unknown, TPersonajesAction> {}
