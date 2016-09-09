import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import jQuery from 'jquery'

export default class ProjectCarousel extends Component {
  static propTypes = {
    project: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    var $this = jQuery(ReactDOM.findDOMNode(this));
    $this
    .slick({
      dots: true,
      adaptiveHeight: true,
      mobileFirst: true,
      infinite: false,
      responsive: [{
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }]
    });
  }

  render() {
    return (
      <div className="viewer__slider">
        {this.props.project.images.map(function(image, i) {
          return (<div className="viewer__image" key={image}><img src={image} /></div>);
        })}
      </div>
    );
  }
}