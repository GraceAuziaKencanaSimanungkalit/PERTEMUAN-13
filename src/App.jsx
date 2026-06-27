import React from "react";

import Catalog from "./Catalog";

import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>📚 Katalog Perpustakaan</h1>

        <p>Pertemuan 12 - React JS</p>
      </header>

      <Catalog />
    </div>
  );
}

export default App;
