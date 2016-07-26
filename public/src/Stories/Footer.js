import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Footer from '../Footer.js'

storiesOf('Footer', module)
  .add('default', () => (
    <Footer></Footer>
  ));