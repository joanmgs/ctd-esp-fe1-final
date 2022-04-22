import { Action, ThunkAction } from "@reduxjs/toolkit";
import { IRootState } from "../store";
import { actionType } from "./enum";

export interface IFiltrarPersonajesAction extends Action {
  type: actionType.FILTRAR_PERSONAJES;
  busqueda: string;
}

export interface IFiltrarPersonajesExitoAction extends Action {
  type: actionType.FILTRAR_PERSONAJES_EXITO;
  info: any;
  personajes: Array<any>;
}

export interface IFiltrarPersonajesErrorAction extends Action {
  type: actionType.FILTRAR_PERSONAJES_ERROR;
  error: string;
}

export type TPersonajesAction =
  | IFiltrarPersonajesAction
  | IFiltrarPersonajesExitoAction
  | IFiltrarPersonajesErrorAction;

export interface IFiltrarPersonajesThunkAction
  extends ThunkAction<void, IRootState, unknown, TPersonajesAction> {}
