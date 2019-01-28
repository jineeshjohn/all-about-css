import React from "react";
import { render } from "react-dom";
import "./app.css";

const App = () => (
  <div className="wrapper">
    <h2>Typical Media Query Breakpoints</h2>
    <p class="example">
      Resize the browser window to see how the background color of this
      paragraph changes on different screen sizes.
    </p>
  </div>
);

render(<App />, document.getElementById("root"));
