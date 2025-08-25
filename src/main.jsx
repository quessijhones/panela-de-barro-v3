import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css"; // <- garante que os estilos carreguem

createRoot(document.getElementById("root")).render(<App />);
