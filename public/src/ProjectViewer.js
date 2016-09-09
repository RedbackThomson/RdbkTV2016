import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import Radium from 'radium';
import color from 'color';

import ProjectCarousel from './ProjectCarousel.js'

@Radium
export default class ProjectViewer extends Component {
  static propTypes = {
    project: React.PropTypes.object.isRequired,
    highlight: React.PropTypes.string.isRequired
  }

  render() {
    var project = this.props.project;
    var highlightStyle = {
      borderColor: this.props.highlight
    };
    var hoverBackgroundHighlight = {
      backgroundColor: this.props.highlight,
      ':hover': {
        backgroundColor: color(this.props.highlight).lighten(0.075).hexString()
      }
    };
    var colorHighlight = {
      color: this.props.highlight
    };
    var showSource = {
      display: (project.source ? "block" : "none")
    };
    var showLink = {
      display: (project.url ? "block" : "none")
    };

    return (
      <div className="viewer" style={highlightStyle}>
        <ReactCSSTransitionReplace 
          transitionName="viewer__shift" 
          transitionAppear={false}
          transitionEnterTimeout={500}
          transitionAppearTimeout={500} 
          transitionLeaveTimeout={500}>
          <div className="viewer__container" key={project.name}>
            <ProjectCarousel project={project}></ProjectCarousel>
            <div className="viewer__container--content">
              <div className="row">
                <h1 className={`viewer__title columns small-12 medium-${project.source ? "9" : "12"}`} style={colorHighlight}> {project.name} </h1>
                <span className="viewer__source medium-3 small-12 columns" style={showSource}>
                  <a className="button viewer__source-button" style={hoverBackgroundHighlight} href={project.source} target="_blank" key={"Source"+project.name}>
                    <i aria-hidden="true" className="material-icons viewer__source--left">insert_drive_file</i> 
                    <span className="viewer__source--vertical">&nbsp;Source</span>
                  </a>
                </span>
              </div>
              <div className="row">
                <h3 className={`viewer__subline columns small-12 medium-${project.url ? "9" : "12"}`}> <small className="viewer__subline--small">from</small> {project.start_date} <small className="viewer__subline--small">until</small> {project.end_date} </h3>
                <span className="viewer__link medium-3 small-12 columns" style={showLink}>
                  <a className="button viewer__link-button" style={hoverBackgroundHighlight} href={project.url} target="_blank" key={"Link"+project.name}>
                    <i aria-hidden="true" className="material-icons viewer__link--left">remove_red_eye</i> 
                    <span className="viewer__source--vertical">&nbsp;Link</span>
                  </a>
                </span>
              </div>
              <p className="viewer__body"> {project.body} </p>
            </div>
          </div>
        </ReactCSSTransitionReplace>
      </div>
    );
  }
}