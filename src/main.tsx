import { StrictMode } from "react";
import { render } from "react-dom";
import "./css/index.css";
import App from "./components/App";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
