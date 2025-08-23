/* main.jsx */
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

/** Captura qualquer erro global e mostra na tela */
(function attachGlobalErrorTrap() {
  const show = (msg) => {
    const el = document.getElementById("fatal-error");
    if (el) {
      el.style.display = "block";
      el.textContent = `Erro crítico ao inicializar:\n\n${msg}`;
    }
    console.error("[FATAL]", msg);
  };
  window.addEventListener("error", (e) => show(e?.error?.stack || e.message));
  window.addEventListener("unhandledrejection", (e) =>
    show(e?.reason?.stack || String(e.reason))
  );
})();

/** Garante que #root existe, mesmo se o HTML estiver diferente */
function ensureRoot() {
  let el = document.getElementById("root");
  if (!el) {
    el = document.createElement("div");
    el.id = "root";
    document.body.appendChild(el);
  }
  return el;
}

const root = createRoot(ensureRoot());
root.render(
  // Desliga StrictMode para erros ficarem 1x (mais fácil de ler)
  /* <React.StrictMode> */ <App /> /* </React.StrictMode> */
);