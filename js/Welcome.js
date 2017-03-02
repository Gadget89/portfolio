import React from 'react'
import { Link } from 'react-router'
var FontAwesome = require('react-fontawesome');
export default React.createClass({
  render() {
    return(
      <main className="main_wrapper">
        <nav className="nav_bar">
          <div className="hex_top"></div>
          <div className="hex_middle"><a target="_blank" href="https://github.com/Gadget89"><i className="fa fa-github fa-2x"></i></a></div>
          <div className="hex_bottom"></div>

          <div className="hex_top"></div>
          <div className="hex_middle"><a target="_blank" href="https://medium.com/@nicolas.roybal/past-future-f982a66d5a66#.m9baco2be"><i className="fa fa-medium fa-2x"></i></a></div>
          <div className="hex_bottom"></div>

          <div className="hex_top"></div>
          <div className="hex_middle"><span><Link to="/Blog"> <i className="fa fa-code fa-2x"></i></Link></span></div>
          <div className="hex_bottom"></div>

          <div className="hex_top"></div>
          <div className="hex_middle"><a target="_blank" href="http://codepen.io/nickr999/"><i className="fa fa-codepen fa-2x"></i></a></div>
          <div className="hex_bottom"></div>
        </nav>
        <section className="center_wrapper">
        <img className="profile_img" src="styles/assets/me.jpg"></img>
        <p>
          <b>Nicolas Roybal</b>
          <br></br>
          Web Developer
          <br></br>
          San Antonio, TX
        </p>
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
