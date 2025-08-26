import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

// Renderiza a app
root.render(<App />);

// Some com o splash assim que montar o primeiro frame
requestAnimationFrame(() => {
  if (window.__hideSplash) window.__hideSplash();
});

// Anti-cache (opcional): se quiser forçar atualização quando trocamos arquivos
// adicione um query param na URL em produção, ex: paneladebarroqatar.com/?v=2