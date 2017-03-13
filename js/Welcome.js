import React from 'react'
import { Link } from 'react-router'
import Projects from './Projects'
import About from './About'
import SideNav from './SideNav'
import Header from './Header'
var FontAwesome = require('react-fontawesome');
export default React.createClass({
  render() {
    return(
      <main className="main_wrapper">
        <Header/>
        <SideNav/>
        <section>
          <article className="shadow_box">
            < About/>
            < Projects/>
          </article>
        </section>
      </main>
    )
  }
})
