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
        <section className="center_wrapper">
          <article className="shadow_box">
            < About/>
          </article>
        <section className="shadow_box">
          < Projects/>
        </section>
        </section>
      </main>
    )
  }
})
