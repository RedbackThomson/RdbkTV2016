import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Description extends Component {
  constructor() {
    super();
    this.state = {
      currentDescriptions: []
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
    var newDescriptions = [this.descriptions[this.descriptionIndex]];
    this.setState({currentDescriptions: newDescriptions});
  }

  render() {
    var descriptions = this.state.currentDescriptions.map(function(item, i) {
      return (<div className="hero__description" key={item}> { item } </div>);
    });
    return (
      <ReactCSSTransitionGroup 
        transitionName="description-shift" 
        transitionAppear={true}
        transitionEnterTimeout={500}
        transitionAppearTimeout={500} 
        transitionLeaveTimeout={500}>
        {descriptions}
      </ReactCSSTransitionGroup>
    );
  }
}