import { IPersonaje } from "../actions/interfaces";

export interface IEstadoPersonaje {
  busqueda: string;
  info: any;
  personajes: Array<IPersonaje>;
  favoritos: Array<IPersonaje>;
  error: string | null;
  status: "CARGANDO" | "COMPLETADO" | "COMPLETADO_CON_ERROR";
}

export const estadoInicial: IEstadoPersonaje = {
  busqueda: "",
  info: {},
  personajes: [],
  favoritos: [],
  error: null,
  status: "CARGANDO",
};
