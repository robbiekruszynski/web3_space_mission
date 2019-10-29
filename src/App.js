import React from "react";
import logo from "./logo.svg";
import Body from "./Body.js";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="button">
        <button class="animated fadeIn delay-2s">Enter</button>
      </div>
      <Body>Loading...</Body>
    </div>
  );
}

export default App;
