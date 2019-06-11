import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductListClass from "./ProductListClass";
import ProductListHook from "./ProductListHook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ProductListHook />
      </header>
    </div>
  );
}

export default App;
