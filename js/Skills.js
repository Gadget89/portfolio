import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section className="center_wrapper">
        <span className="skills_title">
          Skills
        </span>
        <div className="skills_wrapper">
          <div className="skills">
            <ul>
              <li>
                <i className="fa fa-laptop fa-3x" aria-hidden="true"></i>
              </li>
              <li>
                <b>HTML/CSS</b>
              </li>
              <br></br>
              <li>
                HTML5 & CSS3
              </li>
            </ul>
          </div>
          <div className="skills">
            <ul>
              <li>
                <i className="fa fa-code fa-3x" aria-hidden="true"></i>
              </li>
              <li>
                <b>Front End Development</b>
              </li>
              <br></br>
              <li>
                Javascript, jQuery & React.js
              </li>
            </ul>
          </div>
          <div className="skills">
            <ul>
              <li>
                <i className="fa fa-server fa-3x" aria-hidden="true"></i>
              </li>
              <li>
                <b>Back End Development</b>
              </li>
              <br></br>
              <li>
                Node.js, Express.js, & Firebase
              </li>
            </ul>
          </div>
          <div className="skills">
            <ul>
              <li>
                <i className="fa fa-terminal fa-3x" aria-hidden="true"></i>
              </li>
              <li>
                <b>And More</b>
              </li>
              <br></br>
              <li>
                Git, GitHub, NPM, AJAX, Jest, & Babel
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
})
