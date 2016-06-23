import React, { Component } from 'react';
import Description from './Description.js'

export default class App extends Component {
  render() {
    var current_description = "hello";
    return (
      <div className="container">
        <header className="hero">
          <h1 className="hero__name">
            <span className="hero__name--redback">Redback</span> 
            <span className="hero__name--thomson">Thomson</span> 
          </h1>
          <Description></Description>
        </header>
      </div>
    );
  }
}