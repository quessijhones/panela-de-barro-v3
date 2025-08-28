// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import { initLangFromURL, applyDocumentLang } from "./i18n.js";

// idioma: lê ?lang=... e aplica no <html>
initLangFromURL();
applyDocumentLang();

createRoot(document.getElementById("root")).render(<App />);
