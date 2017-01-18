import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return(
      <section>
        <h1>Welcome!</h1>
        <div className="nav_wrapper">
          <button className="nav_button"><Link to="/">Home</Link></button>
          <button className="nav_button"><Link to="/Blog">Blog</Link></button>
          <button className="nav_button"><Link to="/Projects">Projects</Link></button>
        </div>
        <p>
          <b>Nicolas Roybal</b>
          <br></br>
          San Antonio, TX
        </p>
        <p>
          <b>Bio</b>
          <br></br>
          I was born and raised in Northeastern New Mexico. Growing up in New Mexico I picked up a few hobbies including scoccer, skiing, and I gained my second degree black belt in Tae Kwon Do. In 2015 I relocated to San Antonio, TX to see what oppertunities a bigger city would have for me. I quickly found many jobs but ultimatly decided that I wanted to start on a new career path. Initally I was just going to "go back to school" but I found that was not time or cost effective for me. Luckily I stumbled upon a boot camp style front end engineering program at a school called The Iron Yard. I am currently attending the program and a little more than half way through it. Follow me through my journey here.
        </p>
        <p>
          <b>GitHub</b>
          <br></br>
          <a target="_blank" href="https://github.com/Gadget89">Check out my work on GitHub</a>
        </p>
      </section>
    )
  }
})
