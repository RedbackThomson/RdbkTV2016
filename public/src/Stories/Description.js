import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Description from '../Description.js'

storiesOf('Description', module)
  .add('default', () => (
    <div className="row column">
      <Description></Description>
    </div>
  ));