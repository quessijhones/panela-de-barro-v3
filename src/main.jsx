import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

// Garante hash inicial e lang padrão
if (!location.hash) location.hash = "/home";
if (!new URL(location.href).searchParams.get("lang")) {
  const saved = localStorage.getItem("lang") || "pt";
  const u = new URL(location.href);
  u.searchParams.set("lang", saved);
  history.replaceState({}, "", u.toString());
}

createRoot(document.getElementById("root")).render(<App />);
