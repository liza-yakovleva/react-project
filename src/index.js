import React from "react";
import ReactDom from 'react-dom';

const el = React.createElement(
  "h1",
  null,
  "Hello world, React.js"
)

ReactDom.render(el, document.getElementById("root"));