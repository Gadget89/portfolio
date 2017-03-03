import React from 'react'
import { Link } from 'react-router'
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
          <b>Online Portfolio</b>
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
        </nav>

        <section className="center_wrapper">
        <img className="profile_img" src="styles/assets/me.jpg"></img>

        <p className="shadow_box">
          <b>Bio</b>
          <br></br>
          I was born and raised in Northeastern New Mexico. Growing up in New Mexico I picked up a few hobbies including scoccer, skiing, and I gained my second degree black belt in Tae Kwon Do. In 2015 I relocated to San Antonio, TX to see what oppertunities a bigger city would have for me. I quickly found many jobs but ultimatly decided that I wanted to start on a new career path. Initally I was just going to "go back to school" but I found that was not time or cost effective for me. Luckily I stumbled upon a boot camp style front end engineering program at a school called The Iron Yard. I am currently attending the program and a little more than half way through it. Follow me through my journey here.
        </p>
      </section>
      </main>
    )
  }
})
