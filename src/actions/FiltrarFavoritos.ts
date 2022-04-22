import { actionType } from "./enum";
import { IPersonaje } from "./interfaces";

export const AgregarFavoritos = (personaje: IPersonaje) => {
  return {
    type: actionType.AGREGAR_FAVORITO,
    personaje,
  };
};

export const EliminarFavoritos = (personaje: IPersonaje) => {
  return {
    type: actionType.ELIMINAR_FAVORITO,
    personaje,
  };
};
