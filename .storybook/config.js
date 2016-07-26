import { configure } from '@kadira/storybook';

const req = require.context('../public/src/stories/', true, /\.js$/)

function loadStories() {
  require('../public/styles/rdbktv.sass');

  req.keys().forEach(req)
}

configure(loadStories, module);