import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <h1>Projects Test</h1>
        <button className="nav_button"><Link to="/">Home</Link></button>
      </section>
    )
  }
})
