export interface IEstadoPersonaje {
  busqueda: string;
  info: any;
  personajes: Array<any>;
  error: string | null;
  status: "CARGANDO" | "COMPLETADO" | "COMPLETADO_CON_ERROR";
}

export const estadoInicial: IEstadoPersonaje = {
  busqueda: "",
  info: {},
  personajes: [],
  error: null,
  status: "CARGANDO",
};
