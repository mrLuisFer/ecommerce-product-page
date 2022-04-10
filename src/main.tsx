import { StrictMode } from "react";
import { render } from "react-dom";
import "./css/index.css";
import App from "./components/App";

const root = document.getElementById("root")

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);
