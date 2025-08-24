import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

const root = createRoot(document.getElementById("root"));

function render() {
  root.render(<App />);
}

// garante render em mudanças de hash (roteamento simples)
window.addEventListener("hashchange", render);
render();
