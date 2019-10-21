import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import logo from "./logo.svg";
import "./App.css";
import PrimarySearchAppBar from "./components/appBar/PrimarySearchAppBar";
import ProductCardList from "./components/productCard/ProductCardList";

const client = new ApolloClient({
  uri: "https://ph-graph-api-explorer.herokuapp.com/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <main className="main">
          <ProductCardList></ProductCardList>
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;
