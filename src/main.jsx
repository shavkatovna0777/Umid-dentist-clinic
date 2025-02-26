import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./router/App.jsx";
import "./i18n/i18n.js";

createRoot(document.getElementById("root")).render(<App />);
