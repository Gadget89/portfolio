import React from 'react'
import { Link } from 'react-router'
import Projects from './Projects'
import About from './About'
import SideNav from './SideNav'
var FontAwesome = require('react-fontawesome');
export default React.createClass({
  render() {
    return(
      <main className="main_wrapper">
        <section className="hex">
          <div className="hex-row">
            <div className="hex1">
            </div>
            <div className="hex2">
              <b className="title_letter1">N</b>
              <b className="title_letter1-2">icolas</b>
            </div>
            <div className="hex3">
            </div>
          </div>

          <div className="new_hex">
            <div className="hex1">
            </div>
            <div className="hex2">
              <b className="title_letter2">R</b>
              <b className="title_letter2-2">oybal</b>
            </div>
            <div className="hex3">
            </div>
          </div>
          <div>
            <p className="sub_title">
              <b>Portfolio</b>
            </p>
          </div>
        </section>
        < SideNav/>
        <section className="center_wrapper">
        <section className="shadow_box">
          < Projects/>
          < About/>
        </section>
        </section>
      </main>
    )
  }
})
