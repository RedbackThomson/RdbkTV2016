import React, { Component } from 'react'
import $ from 'jquery';
import Vivus from '../bower_components/vivus/dist/vivus.js'

import Description from './Description.js'
import Footer from './Footer.js'
import ProjectSelector from './ProjectSelector.js'
import ProjectViewer from './ProjectViewer.js'

var projects = require('json!./Projects.json');
var contact = require('json!./Contact.json');

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'projects': projects,
      'contact': contact,
      'current': 0,
    };
    this.changeCurrent = this.changeCurrent.bind(this);
  }

  componentDidMount() {
    this.preloadImages(this.state.projects);

    new Vivus('vivus-logo', {
      duration: 100,
      file: 'img/rblogo-outline.svg'
    }, function(obj) {
      obj.el.classList.add('hero__logo--finished');
    }).play();
  }

  //Changes the current project to index new
  changeCurrent(newIndex) {
    if(newIndex < this.state.projects.length) {
      this.setState({'current': newIndex});
    }
  }

  // Preloads all of the images to reduce jumpiness
  preloadImages(projects) {
    projects.forEach(function(project) {
      project.images.forEach(function(image) {
        $('<img/>')[0].src = image;
      });
    });
  }

  render() {
    var highlight = this.state.projects[this.state.current].colour;
    return (
      <div className="wrapper">
        <div className="background-image"></div>
        <section className="content">
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
          <Footer contact={this.state.contact}></Footer>
          <div className="row">
            <div className="small-12 large-4 columns">
              <ProjectSelector projects={this.state.projects} onProjectChange={this.changeCurrent} highlight={highlight}>
              </ProjectSelector>
            </div>
            <div className="small-12 large-8 columns">
              <ProjectViewer project={this.state.projects[this.state.current]} highlight={highlight}></ProjectViewer>
            </div>
          </div>
        </section>
      </div>
    );
  }
}