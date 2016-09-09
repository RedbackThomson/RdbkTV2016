import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

export default class Description extends Component {
  static propTypes = {
  }
  
  constructor() {
    super();
    this.state = {
      currentDescription: ""
    };
    this.descriptionPeriod = 2500;
    this.descriptionIndex = -1;
    this.descriptions = [
      'Web Developer',
      'Programmer',
      'Student',
      'Tinkerer',
      'Tech Enthusiast'
    ];
  }

  componentDidMount() {
    this.changeDescription();
    this.startDescriptionTimer();
  }

  componentWillUnmount() {
    if(this._descriptionTimer) {
      clearInterval(this._descriptionTimer);
      this._descriptionTimer = null;
    }
  }

  startDescriptionTimer() {
    this._descriptionTimer = setInterval(this.changeDescription.bind(this), this.descriptionPeriod);
  }

  changeDescription() {
    this.descriptionIndex = (this.descriptionIndex + 1) % this.descriptions.length;
    this.setState({currentDescription: this.descriptions[this.descriptionIndex]});
  }

  render() {
    return (
      <ReactCSSTransitionReplace 
        transitionName="description-shift" 
        transitionAppear={true}
        transitionEnterTimeout={500}
        transitionAppearTimeout={500} 
        transitionLeaveTimeout={500}>
        <div className="hero__description" key={this.state.currentDescription}>{this.state.currentDescription}</div>
      </ReactCSSTransitionReplace>
    );
  }
}