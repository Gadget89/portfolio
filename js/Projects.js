import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <h1>Projects</h1>
        <button className="nav_button"><Link to="/">Home</Link></button>
        <p>
          I had the oppertunity to contribute to a group project halfway through the cohort. The project used Trello for project managment and we had four members on our team. It was challenging and turned out to be a great expierience. Follow the link below to check out this project on GitHub.
        </p>
        <a target="_blank" href="https://github.com/luciogutz/client-week-project">Click here</a>
      </section>
    )
  }
})
