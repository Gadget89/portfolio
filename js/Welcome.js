import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return(
      <section className="center_wrapper">
        <h1 className="page_title">Welcome!</h1>
        <div>
          <span className="nav_button"><Link to="/Blog">Blog</Link></span>
          <span className="nav_button"><Link to="/Projects">Projects</Link></span>
          <a className="anchor_button"target="_blank" href="https://github.com/Gadget89">GitHub</a>
        </div>
        <p className="center_wrapper">
          <b>Nicolas Roybal</b>
          <br></br>
          San Antonio, TX
        </p>
        <p className="center_wrapper">
          <b>Bio</b>
          <br></br>
          I was born and raised in Northeastern New Mexico. Growing up in New Mexico I picked up a few hobbies including scoccer, skiing, and I gained my second degree black belt in Tae Kwon Do. In 2015 I relocated to San Antonio, TX to see what oppertunities a bigger city would have for me. I quickly found many jobs but ultimatly decided that I wanted to start on a new career path. Initally I was just going to "go back to school" but I found that was not time or cost effective for me. Luckily I stumbled upon a boot camp style front end engineering program at a school called The Iron Yard. I am currently attending the program and a little more than half way through it. Follow me through my journey here.
        </p>
      </section>
    )
  }
})
