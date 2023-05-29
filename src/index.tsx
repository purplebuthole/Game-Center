/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import "./css/app.css";
import App from "./App";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.querySelector(".main")!
);
