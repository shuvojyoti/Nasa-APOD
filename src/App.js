import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./Components/Home";
import NasaPhoto from "./Components/NasaPhoto"
import MarsPhoto from "./Components/MarsPhoto";
import "./App.css";


export default class App extends Component {

  render() {
    return (
     <BrowserRouter>
      <div className="app">
        <Route component={Home} path="/" exact/>
        <Route component={NasaPhoto} path="/nasaphoto" exact/>
        <Route component={MarsPhoto} path="/marsphoto" exact/>
      </div>
     </BrowserRouter>
    )
  }
}
