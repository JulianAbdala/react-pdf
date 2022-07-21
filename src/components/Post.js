import React, { useState } from "react";
import PDF from "./PDF";

const Post = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [number, setNumber] = useState("");
  const [price, setPrice] = useState("");
  const [postSubmitted, setPostSubmitted] = useState(false);

  const submit = (e) => {
    title === "" || content === ""
      ? alert("Recuerde completar todos los campos") && e.preventDefault()
      : setPostSubmitted(true);
  };

  const changeTitleHandler = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };
  const changeContentHandler = (event) => {
    console.log(event.target.value);
    setContent(event.target.value);
  };
  const changeNumberHandler = (event) => {
    console.log(event.target.value);
    setNumber(event.target.value);
  };
  const changePriceHandler = (event) => {
    console.log(event.target.value);
    setPrice(event.target.value);
  };
  return (
    <>
      {!postSubmitted ? (
        <div className="container">
          <div className="jumbotron mt-3">
            <div className="row">
              <div className="col-md-12">
                <div className="well well-sm">
                  <form
                    className="form-horizontal"
                    method="post"
                    onSubmit={submit}
                  >
                    <fieldset>
                      <legend className="text-center header">FacturApp!</legend>
                      <legend className="text-center header">
                        Ingrese los datos de su factura:
                      </legend>
                      <div className="form-group">
                        <span className="col-md-1 col-md-offset-2 text-center">
                          <i className="fa fa-user bigicon"></i>
                        </span>
                        <input
                          onChange={changeTitleHandler}
                          value={title}
                          name="title"
                          type="text"
                          id="title"
                          placeholder="Razon Social"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <span className="col-md-1 col-md-offset-2 text-center">
                          <i className="fa fa-user bigicon"></i>
                        </span>
                        <input
                          onChange={changeNumberHandler}
                          value={number}
                          name="number"
                          type="text"
                          id="number"
                          placeholder="CUIT"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <span className="col-md-1 col-md-offset-2 text-center">
                          <i className="fa fa-pencil-square-o bigicon"></i>
                        </span>
                        <textarea
                          onChange={changeContentHandler}
                          value={content}
                          className="form-control"
                          name="content"
                          type="text"
                          id="content"
                          placeholder="Productos"
                          rows="7"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <span className="col-md-1 col-md-offset-2 text-center">
                          <i className="fa fa-user bigicon"></i>
                        </span>
                        <input
                          onChange={changePriceHandler}
                          value={price}
                          name="number"
                          type="text"
                          id="number"
                          placeholder="Precio Total"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Aceptar
                        </button>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PDF title={title} content={content} number={number} price={price} />
      )}
    </>
  );
};

export default Post;
