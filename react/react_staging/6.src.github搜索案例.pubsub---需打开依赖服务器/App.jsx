import React, { Component } from "react";
import Search from "./Components/Search";
import List from "./Components/List";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    );
  }
}
