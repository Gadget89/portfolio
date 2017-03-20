import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section className="center_wrapper">
        <img className="profile_img" src="styles/assets/me.jpg"></img>
        <span className="profile_title">Nicolas Roybal</span>
        <span className="sub_title">Front-End Developer | San Antonio, TX</span>
          <p className="profile_txt">
            I began my journey to become a software developer in the Fall of 2016. I've had the great privilege to learn from accomplished instructors at The Iron Yard and I graduated from their Front-End Engineering program in February 2017.
          </p>
          <p className="profile_txt">
            After gaining a solid foundation, I am excited for this lifetime adventure. My curiosity and passion for code continue driving me to keep learning as much as I can.
          </p>
          <p className="profile_txt">
            I would like to join a great team and be involved in projects that I can be proud of. I invite you to check out my projects and if you are interested in helping me reach my goals, please feel free to <a className = "myContactInfo" href="mailto:nicolas.roybal@hotmail.com" data-rel="external">contact me.</a>
          </p>
      </section>
    )
  }
})
