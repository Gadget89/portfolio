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
        <section className="hex">
          <div className="welcome_hex">
            </div>
            <div className="hex1w">
            </div>
            <div className="hex2w">
              <div className="hex_row">
                <div className="hex1">
                </div>
                <div className="hex2">
                  <b className="title_letter1">Nicolas</b>
                  <b className="title_letter1-2"></b>
                </div>
                <div className="hex3">
                </div>
              </div>

              <div className="new_hex">
                <div className="hex1">
                </div>
                <div className="hex2">
                  <b className="title_letter2">Roybal</b>
                  <b className="title_letter2-2"></b>
                </div>
                <div className="hex3">
                </div>
            </div>
            <div className="hex3w">
            </div>
          </div>

        </section>

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
