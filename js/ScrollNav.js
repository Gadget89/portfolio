import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
scrollUp(){
  window.scroll(0, 0)
},
  render() {
    return (
      <nav className="nav_top">
        <a className="nav_button" onClick={this.scrollUp}>
          <div className="hex_top"></div>
          <div className="hex_middle">
            <i className="fa fa-arrow-up fa-2x"></i>
            </div>
          <div className="hex_bottom"></div>
        </a>
      </nav>
      )
    }
  })
