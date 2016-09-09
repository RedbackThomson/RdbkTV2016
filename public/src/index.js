import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import App from './App.js'

require("../styles/rdbktv.sass");
require("jquery");
require("slick-carousel");

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render((
  <Router history={appHistory}>
    <Route path="/:project" component={App}>
    </Route>
    <Route path="*" component={App}>
    </Route>
  </Router>
), document.getElementById('root'));