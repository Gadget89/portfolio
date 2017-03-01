import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section className="center_wrapper">
        <h1 className="page_title">Projects</h1>
        <nav className="nav_bar">
        <span className="nav_button"><Link to="/">Home <i className="fa fa-home"></i></Link></span>
        <a className="anchor_button" target="_blank" href="http://codepen.io/nickr999/">Code Pen <i className="fa fa-codepen"></i></a>
        </nav>
        <p>
          I had the oppertunity to contribute to a group project halfway through the cohort. The project used Trello for project managment and we had four members on our team. It was challenging and turned out to be a great expierience. Follow the link below to check out this project on GitHub.
        </p>
        <a target="_blank" href="https://client-week-project.herokuapp.com/">Click here</a>
      </section>
    )
  }
})
