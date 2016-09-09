import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Radium from 'radium';

@Radium
export default class Description extends Component {
  static propTypes = {
    contact: React.PropTypes.array.isRequired
  }

  constructor() {
    super();
  }

  render() {
    var hoverColours = {};

    return (
      <footer className="footer row column">
        <div className="footer__row">
          <div className="row column">
              <ul className="footer__links">
              {this.props.contact.map(function(contact, i) {
                var hoverColour = {
                  ":hover": {
                    "color": contact.colour
                  }
                };

                return (
                <li className="footer__link">
                  <a key={contact.name} href={contact.link} alt={contact.name} title={contact.hover} style={hoverColour} key={contact.name}><i className={contact.icon}></i></a>
                </li>);
              }, this)}
              </ul>
          </div>
        </div>
      </footer>
    );
  }
}