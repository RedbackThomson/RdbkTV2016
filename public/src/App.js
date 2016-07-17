import React, { Component } from 'react'
import Vivus from '../bower_components/vivus/dist/vivus.js'

import Description from './Description.js'
import Footer from './Footer.js'
import ProjectSelector from './ProjectSelector.js'
import ProjectViewer from './ProjectViewer.js'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'projects': this.getProjects(),
      'current': 0,
    };
    this.changeCurrent = this.changeCurrent.bind(this);
  }

  replaceLogo() {

  }

  componentDidMount() {
    new Vivus('vivus-logo', {
      duration: 100,
      file: 'img/rblogo-outline.svg'
    }, function(obj) {
      obj.el.classList.add('hero__logo--finished');
    },this.replaceLogo).play();
  }

  //Changes the current project to index new
  changeCurrent(newIndex) {
    if(newIndex < this.state.projects.length)
      this.setState({'current': newIndex});
  }

  getProjects() {
    return [
      {
        'name': 'LoLAlerter',
        'subtitle': 'Over 100,000 daily viewers',
        'thumbnail': 'http://placehold.it/90x90',
        'feature': 'http://placehold.it/1000x500'
      },
      {
        'name': 'osu!Celebrity',
        'subtitle': '500+ daily users',
        'thumbnail': 'http://placehold.it/90x90',
        'feature': 'http://placehold.it/1000x500'
      },
      {
        'name': 'osu!Track',
        'subtitle': 'Tracked over 200,000 users',
        'thumbnail': 'http://placehold.it/90x90',
        'feature': 'http://placehold.it/1000x500'
      },
      {
        'name': 'Mylixia',
        'subtitle': 'The home page for a famous person',
        'thumbnail': 'http://placehold.it/90x90',
        'feature': 'http://placehold.it/1000x500'
      }
    ];
  }

  render() {
    return (
      <div>
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