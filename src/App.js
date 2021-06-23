import React from "react";
import API from "./utils/API";
import "../src/App.css"
import logo from './logo.svg';
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
