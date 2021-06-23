import React from "react";
import "../src/App.css"
import Jumbotron from "./components/jumbotron/index.js";
import Searchbar from "./components/searchbar/index.js";
import Table from "./components/table/index.js";

function App() {
  return (
    <div>
      <Jumbotron/>
      <Searchbar/>
      <Table/>
    </div>
  );
}

export default App;
