import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import Welcome from './Welcome'
import About from './About'
import Projects from './Projects'

render(
  (
    <Router history={hashHistory}>
      <Route component={ App }>
        <Route path="/" component={ Welcome } />
        <Route path="/About" component={ About } />
        <Route path="/Projects" component={ Projects} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
