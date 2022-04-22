import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiltrarPersonajesThunk } from "../../actions";
import { IRootState } from "../../store";
import "./filtros.css";

const Filtros: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  let { busqueda } = useSelector<IRootState, any>(
    (state) => state.personajesReducer
  );

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(FiltrarPersonajesThunk(e.target.value));
  };

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        value={busqueda ? busqueda : ''}
        onChange={handlerChange}
      />
    </div>
  );
};

export default Filtros;
