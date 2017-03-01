import React from 'react'
import { Link } from 'react-router'
var FontAwesome = require('react-fontawesome');
export default React.createClass({
  render() {
    return(
      <section className="center_wrapper">
        <h1 className="page_title">Welcome!</h1>
        <nav className="nav_bar">
          <span className="nav_button"><Link to="/Blog">Blog <i className="fa fa-pencil-square-o"></i></Link></span>
          <span className="nav_button"><Link to="/Projects">Projects <i className="fa fa-code"></i></Link></span>
          <a className="anchor_button"target="_blank" href="https://github.com/Gadget89">GitHub <i className="fa fa-github"></i></a>
        </nav>
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
    )
  }
})
