import React from 'react'
import { Link } from 'react-router'
import Projects from './Projects'
import About from './About'
import SideNav from './SideNav'
import ScrollNav from './ScrollNav'
import Header from './Header'
import Skills from './Skills'
import Carousel from './Carousel'

var FontAwesome = require('react-fontawesome');
export default React.createClass({
  render() {
    return(
      <main className="main_wrapper">
        <Header/>
        <SideNav/>
        <ScrollNav/>
        <section>
          <article className="shadow_box">
          < About/>
          < Carousel/>
          < Skills/>
          </article>
        </section>
      </main>
    )
  }
})
