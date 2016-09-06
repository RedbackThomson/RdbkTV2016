import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

export default class ProjectViewer extends Component {
  static propTypes = {
    project: React.PropTypes.object.isRequired,
    highlight: React.PropTypes.string.isRequired
  }

  render() {
    var project = this.props.project;

    return (
      <div className="viewer">
        <ReactCSSTransitionReplace 
          transitionName="viewer__shift" 
          transitionAppear={false}
          transitionEnterTimeout={500}
          transitionAppearTimeout={500} 
          transitionLeaveTimeout={500}>
          <div className="viewer__container" key={project.name}>
            <img className="viewer__container--feature" src={project.feature} />
            <div className="viewer__container--content">
              <h1> {project.name} </h1>
              <h3> {project.subtitle} </h3>
            </div>
          </div>
        </ReactCSSTransitionReplace>
      </div>
    );
  }
}