import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
  console.log(props);
  return (
    <div>
      <div className="Post" ref={ref}>
        <h1>FacturaApp! 100% Barrani</h1>
        <h2>Razon social: {props.title}</h2>
        <h2>CUIT: {props.number.replaceAll("-", "")}</h2>
        <h3>Productos:</h3>
        <p>{props.content}</p>
        <h4>Precio Total: {props.price.replaceAll(",", ".")}</h4>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </div>
  );
};

export default PDF;
