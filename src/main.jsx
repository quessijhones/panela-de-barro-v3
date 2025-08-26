// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

import { initLangFromURL, applyDocumentLang, getLang } from "./i18n";

// 1) define o idioma logo no carregamento
initLangFromURL();
applyDocumentLang(getLang());

// 2) mantém <html lang dir> atualizado quando o usuário troca de idioma
window.addEventListener("langchange", () => applyDocumentLang(getLang()));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);