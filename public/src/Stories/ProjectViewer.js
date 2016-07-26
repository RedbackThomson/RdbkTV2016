import React from 'react'
import MediaQuery from 'react-responsive'
import { storiesOf, action } from '@kadira/storybook'

import ProjectViewer from '../ProjectViewer.js'

var projects = require('json!../Projects.json');

storiesOf('ProjectViewer', module)
  .add('loaded', () => (
    <div className="row">
      <div className="small-12 large-8 large-offset-4 columns">
        <ProjectViewer project={projects[0]}></ProjectViewer>
      </div>
    </div>
  ));