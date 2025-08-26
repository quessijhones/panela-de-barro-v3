import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import { initLangFromURL, applyDocumentLang, getLang } from "./i18n";

// 1) inicializa a partir de ?lang= se houver
initLangFromURL();
// 2) garante <html lang/dir> correto no primeiro paint
applyDocumentLang(getLang());

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);