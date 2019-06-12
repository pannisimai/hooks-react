import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassRefHook from "./components/ClassRefHook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClassRefHook />
      </header>
    </div>
  );
}

export default App;
