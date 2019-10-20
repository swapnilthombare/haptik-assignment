import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import MyConnectComponent from "./components/myConnectComponent/myConnectComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <MyConnectComponent>New Component</MyConnectComponent> */}
    </div>
  );
}

export default App;
