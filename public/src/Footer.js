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
      <footer className="footer row column">
        <div className="footer__row" style={highlightStyle}>
          <div className="row">
            <div className="small-12 medium-6 columns">
              <ul className="footer__links">
                <li><a className="footer__text footer__text--link" href="#">What I Do</a></li>
                <li><a className="footer__text footer__text--link" href="#">Pricing</a></li>
              </ul>
            </div>
            <div className="small-12 medium-6 columns">
              <ul className="footer__links">
                <li><a className="footer__text footer__text--link" href="#">GitHub</a></li>
                <li><a className="footer__text footer__text--link" href="#">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}