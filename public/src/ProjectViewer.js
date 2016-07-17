import React, { Component } from 'react';

export default class ProjectViewer extends Component {
  render() {
    var project = this.props.project;

    return (
      <div className="viewer">
        <img src={project.feature} />
        <h1> {project.name} </h1>
        <h3> {project.subtitle} </h3>
      </div>
    );
  }
}