import React, { Component } from "react";
import './App.css'
import Hello from "./components/Hello";
import WelCome from "./components/Welcome";
export default class App extends Component{
  render() {
    return(
      <div>
        <Hello />
        <WelCome />
      </div>
    )
  }
}
