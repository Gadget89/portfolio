import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <header className="header_fixed">
          <h1 className="header_name">
            Nicolas Roybal
          </h1>
        </header>
        <header className="header_reletive">
          <ul className="temp">
            <li className="header_content">
              <a>
                About
              </a>
            </li>
            <li className="header_content">
              <a>
                Resume
              </a>
            </li>
          </ul>
        </header>
      </section>

    )
  }
})