import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import VisitorList from "./components/visitorList";

function App() {
  return (
    <div className="App">
      <VisitorList></VisitorList>
    </div>
  );
}

export default App;
