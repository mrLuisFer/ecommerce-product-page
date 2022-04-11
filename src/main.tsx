import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./components/App";

const app = document.getElementById("root")!;
const root = createRoot(app);
root.render(<App />);
