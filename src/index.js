import React from "react";
import ReactDom from 'react-dom';

// const el = React.createElement(
//   "h1",
//   {
//     id: "test",
//     name:"title"
//  },
//   "Hello world, React.js"
// )

// JSX

const el = <h1 id = "test" name="title">Hello world,React.js!!!</h1>

ReactDom.render(el, document.getElementById("root"));