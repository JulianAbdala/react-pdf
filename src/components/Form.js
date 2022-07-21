import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import Doc from "./Doc";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [cuit, setCuit] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [submit, setSubmit] = useState(false);

  const changeCuitHandler = (event) => {
    setCuit(event.target.value);
  };
  const changeNombreHandler = (event) => {
    setNombre(event.target.value);
  };
  const changePrecioCountHandler = (event) => {
    setPrecio(event.target.value);
  };
  const generateBookObject = () => {
    const formData = {
      nombre,
      cuit,
      precio,
    };
    return formData;
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const formData = generateBookObject();
  };

  return (
    <>
      <form onSubmit={<Doc nombre={nombre} cuit={cuit} precio={precio} />}>
        <div className="new-book-controls">
          <div className="new-book-control">
            <label>Nombre</label>
            <input value={nombre} onChange={changeNombreHandler} type="text" />
          </div>
          <div className="new-book-control">
            <label>CUIT</label>
            <input value={cuit} onChange={changeCuitHandler} type="number" />
          </div>
          <div className="new-book-control">
            <label>Precio</label>
            <input
              value={precio}
              onChange={changePrecioCountHandler}
              type="number"
              min="1"
              step="1"
            />
          </div>
        </div>
        <div className="new-book-actions">
          <button type="submit">Agregar factura</button>
        </div>
      </form>
    </>
  );
};
export default Form;
