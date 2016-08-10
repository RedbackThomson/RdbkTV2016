import React, { Component } from 'react'
import Vivus from '../bower_components/vivus/dist/vivus.js'

import Description from './Description.js'
import Footer from './Footer.js'
import ProjectSelector from './ProjectSelector.js'
import ProjectViewer from './ProjectViewer.js'

var projects = require('json!./Projects.json');

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'projects': projects,
      'current': 0,
    };
    this.changeCurrent = this.changeCurrent.bind(this);
  }

  componentDidMount() {
    new Vivus('vivus-logo', {
      duration: 100,
      file: 'img/rblogo-outline.svg'
    }, function(obj) {
      obj.el.classList.add('hero__logo--finished');
    }).play();
  }

  //Changes the current project to index new
  changeCurrent(newIndex) {
    if(newIndex < this.state.projects.length)
      this.setState({'current': newIndex});
  }

  render() {
    var bgStyle = {
      backgroundColor: this.state.projects[this.state.current].colour
    };
    return (
      <div>
        <div className="background-image" style={bgStyle}></div>
        <header className="hero">
          <div className="row">
            <div className="small-3 columns">
              <div className="hero__logo" id="vivus-logo">
              </div>
            </div>
            <div className="small-9 columns">
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
            </div>
          </div>
        </header>
        <section>
          <div className="row">
            <div className="small-12 large-4 columns">
              <ProjectSelector projects={this.state.projects} onProjectChange={this.changeCurrent}>
              </ProjectSelector>
            </div>
            <div className="small-12 large-8 columns">
              <ProjectViewer project={this.state.projects[this.state.current]}></ProjectViewer>
            </div>
          </div>
        </section>
      </div>
    );
  }
}