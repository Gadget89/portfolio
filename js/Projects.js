import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <main>
        <h1 className="page_title">Projects</h1>
          <nav className="nav_bar">
            <div className="hex_top"></div>
            <div className="hex_middle"><span><Link to="/"> <i className="fa fa-home fa-2x"></i></Link></span></div>
            <div className="hex_bottom"></div>
          </nav>
      <section className="center_wrapper">
        <section className="shadow_box">
          <h1>First Group Project</h1>
          I had the oppertunity to contribute to a group project halfway through the cohort. The project used Trello for project managment and we had four members on our team. It was challenging and turned out to be a great expierience. Follow the link below to check out this project on GitHub.
          <nav  className="nav_bar">
          <div className="hex_top"></div>
          <div className="hex_middle"><a target="_blank" href="https://client-week-project.herokuapp.com/"><i className="fa fa-code fa-2x"></i></a></div>
          <div className="hex_bottom"></div>
          </nav>
        </section>
      </section>
      </main>
    )
  }
})
