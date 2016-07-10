import React, { Component } from 'react';

export default class ProjectSelector extends Component {
  getItem(name) {
    return (
      <li className="projects__project">
        <a href="#">
          <div className="media-object projects__project--media">
            <div className="media-object-section">
              <img className="projects_project--image" src="http://placehold.it/90x90" height="90" width="90" /> 
            </div>
            <div className="media-object-section">
              <h4 className="projects__project--name">{name}</h4><br/>
              <div className="projects__project--subline"> Over 100,000 daily viewers </div>
            </div>
          </div>
        </a>
      </li>
    );
  }

  render() {
    return (
      <ul className="menu vertical projects">
        {this.getItem("LoLAlerter")}
        {this.getItem("osu!Celebrity")}
        {this.getItem("Anooj")}
        {this.getItem("is")}
        {this.getItem("a")}
        {this.getItem("pussy")}
        {this.getItem("ass")}
        {this.getItem("bitch")}
      </ul>
    );
  }
}