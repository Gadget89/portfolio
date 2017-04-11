import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import Welcome from './Welcome'
import Resume from './Resume'
import Projects from './Projects'

render(
  (
    <Router history={hashHistory}>
      <Route component={ App }>
        <Route path="/" component={ Welcome } />
        <Route path="/Resume" component={ Resume } />
        <Route path="/Projects" component={ Projects} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
