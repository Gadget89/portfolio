import React from 'react'
import { Link } from 'react-router'
import Projects from './Projects'
import About from './About'
var FontAwesome = require('react-fontawesome');
export default React.createClass({
  render() {
    return(
      <main className="main_wrapper">
        <section className="hex">
      <div className="hex-row">
        <div className="hex1"></div>
        <div className="hex2"><b className="title_letter1">N</b><b className="title_letter1-2">icolas</b></div>
        <div className="hex3"></div>
      </div>

      <div className="new_hex">
        <div className="hex1"></div>
        <div className="hex2"><b className="title_letter2">R</b><b className="title_letter2-2">oybal</b></div>
        <div className="hex3"></div>
      </div>
      <div>
        <p className="sub_title">
          <b>Portfolio</b>
        </p>
      </div>

        </section>
        <nav className="nav_bar">
          <a className="nav_button" target="_blank" href="https://github.com/Gadget89">
            <div className="hex_top"></div>
            <div className="hex_middle"><i className="fa fa-github fa-2x"></i></div>
            <div className="hex_bottom"></div>
          </a>

          <a className="nav_button" target="_blank" href="https://medium.com/@nicolas.roybal/past-future-f982a66d5a66#.m9baco2be">
            <div className="hex_top"></div>
            <div className="hex_middle"><i className="fa fa-medium fa-2x"></i></div>
            <div className="hex_bottom"></div>
          </a>

          <a className="nav_button" target="_blank" href="http://codepen.io/nickr999/">
            <div className="hex_top"></div>
            <div className="hex_middle"><i className="fa fa-codepen fa-2x"></i></div>
            <div className="hex_bottom"></div>
          </a>
          <a className="nav_button" target="_blank" href="http://codepen.io/nickr999/">
            <div className="hex_top"></div>
            <div className="hex_middle"><i className="fa fa-linkedin fa-2x"></i></div>
            <div className="hex_bottom"></div>
          </a>
        </nav>

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
