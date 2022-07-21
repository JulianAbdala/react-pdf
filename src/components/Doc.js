import React from "react";
import Form from "./Form";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Doc = (props) => {
  return (
    <>
      <div className="Post">
        <h1>{props.nombre}</h1>
        <h2>{props.precio}</h2>
        <p>{props.cuit}</p>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
};

export default Doc;
