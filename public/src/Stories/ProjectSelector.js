import React from 'react'
import MediaQuery from 'react-responsive'
import { storiesOf, action } from '@kadira/storybook'

import ProjectSelector from '../ProjectSelector.js'

var projects = require('json!../Projects.json');

storiesOf('ProjectSelector', module)
  .add('loaded', () => (
    <div className="row">
      <div className="small-12 large-4 columns">
        <ProjectSelector onProjectChange={action('Project changed')} projects={projects}></ProjectSelector>
      </div>
    </div>
  ))
  .add('mobile', () => (
    <div className="row">
      <div className="small-12 large-4 columns">
        <ProjectSelector onProjectChange={action('Project changed')} projects={projects}></ProjectSelector>
      </div>
    </div>
  ));