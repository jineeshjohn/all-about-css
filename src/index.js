import React from "react";
import { render } from "react-dom";
import "./app.css";

import App from "./app";

const Container = () => (
  <div className="wrapper">
    <h2>Typical Media Query Breakpoints</h2>
    <p className="example">
      Resize the browser window to see how the background color of this
      paragraph changes on different screen sizes.
    </p>
    <App />
  </div>
);

render(<Container />, document.getElementById("root"));
