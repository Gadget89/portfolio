import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import Welcome from './Welcome'
import Blog from './Blog'
import Projects from './Projects'

render(
  (
    <Router history={hashHistory}>
      <Route component={ App }>
        <Route path="/" component={ Welcome } />
        <Route path="/Blog" component={ Blog } />
        <Route path="/Projects" component={ Projects} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
