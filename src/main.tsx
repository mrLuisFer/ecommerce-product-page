import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./css/index.css";
import App from "./components/App";

const app = document.getElementById("root")!;
const root = createRoot(app);

process.env.NODE_ENV === "development"
  ? root.render(
      <StrictMode>
        <App />
      </StrictMode>
    )
  : root.render(<App />);
