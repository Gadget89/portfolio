import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <main>
        <h1 className="page_title">Blog</h1>
        <nav className="nav_bar">
          <div className="hex_top"></div>
          <div className="hex_middle"><span><Link to="/"> <i className="fa fa-home fa-2x"></i></Link></span></div>
          <div className="hex_bottom"></div>
        </nav>
      <section className="center_wrapper">
        <p className="shadow_box">
          Sorry, this page is under construction ):
        </p>
      </section>
      </main>
    )
  }
})
