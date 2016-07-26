import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import App from '../App.js'

storiesOf('App', module)
  .add('default', () => (
    <App></App>
  ));