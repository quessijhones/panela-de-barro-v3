// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

// estas funções agora existem no i18n.js (acabamos de adicioná-las)
import { initLangFromURL, applyDocumentLang, getLang } from "./i18n";

// 1) inicializa a partir de ?lang= se houver
initLangFromURL();

// 2) aplica <html lang> e dir (rtl para árabe)
applyDocumentLang(getLang());

// 3) monta a aplicação
const rootEl = document.getElementById("root");
createRoot(rootEl).render(<App />);

// 4) (opcional) ouça mudanças de idioma para atualizar o <html lang/dir>
window.addEventListener?.("langchange", () => {
  applyDocumentLang(getLang());
});