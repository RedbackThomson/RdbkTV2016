import React, { Component } from 'react';

export default class ProjectSelector extends Component {
  changeProject(index) {
    this.props.onProjectChange(index);
  }

  getItem(project, index) {
    return (
      <li className="projects__project" key={index}>
        <a onClick={() => this.changeProject(index)}>
          <div className="media-object projects__project--media">
            <div className="media-object-section">
              <img className="projects_project--image thumbnail" src={project.thumbnail} height="90" width="90" /> 
            </div>
            <div className="media-object-section">
              <h4 className="projects__project--name">{project.name}</h4><br/>
              <div className="projects__project--subline"> {project.subtitle} </div>
            </div>
          </div>
        </a>
      </li>
    );
  }

  render() {
    var self = this;
    return (
      <ul className="menu vertical projects">
        {this.props.projects.map(function(project, i) {
          return self.getItem(project, i);
        })}
      </ul>
    );
  }
}