import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <h1>Blog Test</h1>
        <button className="nav_button"><Link to="/">Home</Link></button>
        <div>
          <a target="_blank" href="https://medium.com/@nicolas.roybal/past-future-f982a66d5a66#.m9baco2be">Check out my blog on Medium</a>
        </div>
      </section>
    )
  }
})
