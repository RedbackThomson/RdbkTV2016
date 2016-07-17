import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Description extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <footer className="footer">
        <div className="row">
          <div className="small-12 medium-3 large-4 columns">
            <i className="fi-laptop footer__icon"></i>
            <p className="footer__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum maiores alias ea sunt facilis impedit fuga dignissimos illo quaerat iure in nobis id quos, eaque nostrum! Unde, voluptates suscipit repudiandae!</p>
          </div>
          <div className="small-12 medium-3 large-4 columns">
            <i className="fi-html5 footer__icon"></i>
            <p className="footer__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit impedit consequuntur at! Amet sed itaque nostrum, distinctio eveniet odio, id ipsam fuga quam minima cumque nobis veniam voluptates deserunt!</p>
          </div>
          <div className="small-6 medium-3 large-2 columns">
            <h4 className="footer__header">Work With Me</h4>
            <ul className="footer__links">
              <li><a className="footer__text footer__text--link" href="#">What I Do</a></li>
              <li><a className="footer__text footer__text--link" href="#">Pricing</a></li>
              <li><a className="footer__text footer__text--link" href="#">Events</a></li>
              <li><a className="footer__text footer__text--link" href="#">Blog</a></li>
              <li><a className="footer__text footer__text--link" href="#">FAQ's</a></li>
            </ul>
          </div>
          <div className="small-6 medium-3 large-2 columns">
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