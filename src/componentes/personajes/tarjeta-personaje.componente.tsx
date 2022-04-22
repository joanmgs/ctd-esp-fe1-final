import React from "react";
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
  image: any;
  name: any;
}
const TarjetaPersonaje: React.FC<TarjetaPersonajeProps> = ({ image, name }): JSX.Element => {
  return (
    <div className="tarjeta-personaje">
      <img
        src={image}
        alt={name}
      />
      <div className="tarjeta-personaje-body">
        <span>{name}</span>
        <BotonFavorito esFavorito={false} onClick={() => {}} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
