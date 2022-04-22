import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiltrarPersonajesThunk } from "../../actions";
import { IRootState } from "../../store";
import "./paginacion.css";

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */
const Paginacion: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  let { info, busqueda } = useSelector<IRootState, any>(
    (state) => state.personajesReducer
  );

  if (!info) {
    return <></>;
  }

  const handlerBefore = () => {
    dispatch(FiltrarPersonajesThunk(busqueda, info.prev));
  };
  const handlerNext = () => {
    dispatch(FiltrarPersonajesThunk(busqueda, info.next));
  };

  return (
    <div className="paginacion">
      <button
        disabled={!info.prev}
        className={"primary"}
        onClick={handlerBefore}
      >
        Anterior
      </button>
      <button disabled={!info.next} className={"primary"} onClick={handlerNext}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
