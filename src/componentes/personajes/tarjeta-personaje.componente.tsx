import React from "react";
import { useDispatch } from "react-redux";
import { AgregarFavoritos, EliminarFavoritos } from "../../actions/FiltrarFavoritos";
import { IPersonaje } from "../../actions/interfaces";
import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */
type TarjetaPersonajeProps = {
  personaje: IPersonaje;
}
const TarjetaPersonaje: React.FC<TarjetaPersonajeProps> = ({ personaje }): JSX.Element => {
  const dispatch = useDispatch();
  const { image, name, isFavorite } = personaje;

  const handlerFavorite = () => {
    if(isFavorite) {
      dispatch(EliminarFavoritos(personaje));
    } else {
      dispatch(AgregarFavoritos(personaje))
    };
  }

  return (
    <div className="tarjeta-personaje">
      <img
        src={image}
        alt={name}
      />
      <div className="tarjeta-personaje-body">
        <span>{name}</span>
        <BotonFavorito esFavorito={!!isFavorite} onClick={handlerFavorite} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
