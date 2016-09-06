import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Description extends Component {
  static propTypes = {
    highlight: React.PropTypes.string.isRequired
  }

  constructor() {
    super();
  }

  render() {
    var highlightStyle = {
      borderColor: this.props.highlight
    };

    return (
      <footer className="footer">
        <div className="row footer__row" style={highlightStyle}>
          <div className="small-6 columns">
            <h4 className="footer__header">Work With Me</h4>
            <ul className="footer__links">
              <li><a className="footer__text footer__text--link" href="#">What I Do</a></li>
              <li><a className="footer__text footer__text--link" href="#">Pricing</a></li>
              <li><a className="footer__text footer__text--link" href="#">Events</a></li>
              <li><a className="footer__text footer__text--link" href="#">Blog</a></li>
              <li><a className="footer__text footer__text--link" href="#">FAQ's</a></li>
            </ul>
          </div>
          <div className="small-6 columns">
            <h4 className="footer__header">Follow Me</h4>
            <ul className="footer__links">
              <li><a className="footer__text footer__text--link" href="#">GitHub</a></li>
              <li><a className="footer__text footer__text--link" href="#">Facebook</a></li>
              <li><a className="footer__text footer__text--link" href="#">Twitter</a></li>
              <li><a className="footer__text footer__text--link" href="#">Instagram</a></li>
              <li><a className="footer__text footer__text--link" href="#">Dribbble</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}