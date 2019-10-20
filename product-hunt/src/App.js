import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PrimarySearchAppBar from "./components/appBar/PrimarySearchAppBar";
import ProductCardList from "./components/productCard/ProductCardList";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <main className="main">
        <ProductCardList></ProductCardList>
      </main>
    </div>
  );
}

export default App;
