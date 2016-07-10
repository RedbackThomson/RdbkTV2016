import React, { Component } from 'react';
import Description from './Description.js'
import ProjectSelector from './ProjectSelector.js'
import ProjectViewer from './ProjectViewer.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <header className="hero">
          <div className="row">
            <div className="small-12 columns">
              <h1 className="hero__name">
                <span className="hero__name--redback">Redback</span> 
                <span className="hero__name--thomson">Thomson</span> 
              </h1>
            </div>
            <div className="small-12 columns">
              <Description></Description>
            </div>
          </div>
        </header>
        <section>
          <div className="row">
            <div className="small-12 large-4 columns">
              <ProjectSelector></ProjectSelector>
            </div>
            <div className="small-12 large-8 columns">
              <ProjectViewer></ProjectViewer>
            </div>
          </div>
        </section>
      </div>
    );
  }
}