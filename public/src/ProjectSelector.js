import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import Select from 'react-select'
import Radium from 'radium'
import $ from 'jquery'
import color from 'color'

@Radium
export default class ProjectSelector extends Component {
  static propTypes = {
    projects: React.PropTypes.array.isRequired,
    onProjectChange: React.PropTypes.func.isRequired,
    highlight: React.PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      lastIndex: 0
    };
  }

  componentDidMount() {
    this.changeMobileHighlight(this.props.highlight);
  }

  componentDidUpdate() {
    this.changeMobileHighlight(this.props.highlight); 
  }

  changeProject(index) {
    this.props.onProjectChange(index);
    this.setState({lastIndex: index});
  }

  getItem(project, index) {
    var highlightStyle = {
      borderColor: this.props.highlight
    };
    return (
      <li className="projects__project" key={index} style={highlightStyle}>
        <a onClick={() => this.changeProject(index)}>
          <div className="media-object projects__project--media">
            <div className="media-object-section">
              <img className="projects_project--image thumbnail" src={project.thumbnail} height="90" width="90" /> 
            </div>
            <div className="media-object-section">
              <h4 className="projects__project--name">{project.name}</h4><br/>
              <div className="projects__project--subline"> {project.subtitle} </div>
              {project.languages.map(function(language, i) {
                return <span key={language} className="label projects__project--label">{language}</span>;
              }, this)}
            </div>
          </div>
        </a>
      </li>
    );
  }

  changeMobileHighlight(highlight) {
    var control = $(".Select-control");

    var lighter = color(highlight).lighten(0.05).hexString();
    control.css('border-color', highlight + " " + lighter + " " + lighter);
    control.css('box-shadow', 'inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 5px -1px fade(' + highlight + ',50%)');
  }

  render() {
    var self = this;
    var mobileOptions = [];
    this.props.projects.map(function(project, i) {
      this.push({value: i, label: project.name, image: project.thumbnail});
    }, mobileOptions);

    return (
      <div>
        <MediaQuery minDeviceWidth={1024}>
          <ul className="menu vertical projects">
            {this.props.projects.map(function(project, i) {
              return this.getItem(project, i);
            }, this)}
          </ul>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1024}>
          <Select 
            className="projects__mobile-project"
            options={mobileOptions}
            onChange={(val) => this.changeProject(val.value)} 
            searchable={false} 
            clearable={false} 
            value={this.state.lastIndex}
            pageSize={20}
            optionComponent={MobileProjectOption}
            valueComponent={MobileProjectValue} />    
        </MediaQuery>
      </div>
    );
  }
}

const MobileProjectValue = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.object
  },
  render () {
    return (
      <div className="Select-value" title={this.props.value.title}>
        <span className="Select-value-label">
          <img src={this.props.value.image} width={15} height={15} className="projects__mobile-project--image" />
          {this.props.children}
        </span>
      </div>
    );
  }
});

const MobileProjectOption = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    isDisabled: React.PropTypes.bool,
    isFocused: React.PropTypes.bool,
    isSelected: React.PropTypes.bool,
    onFocus: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    option: React.PropTypes.object.isRequired,
  },
  handleMouseDown (event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSelect(this.props.option, event);
  },
  handleMouseEnter (event) {
    this.props.onFocus(this.props.option, event);
  },
  handleMouseMove (event) {
    if (this.props.isFocused) return;
    this.props.onFocus(this.props.option, event);
  },
  render() {
    return (
      <div className={this.props.className}
        onMouseDown={this.handleMouseDown}
        onMouseEnter={this.handleMouseEnter}
        onMouseMove={this.handleMouseMove}
        title={this.props.option.title}>
        <img src={this.props.option.image} width={15} height={15} className="projects__mobile-project--image" />
        {this.props.children}
      </div>
    );
  }
})