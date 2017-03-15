import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  scrollToTop() {
    window.scroll(0, 0)
  },
  scrollToProjects() {
    window.scroll(0, 745)
  },
  scrollToResume() {
    window.scroll(0, 1600)
  },

  render() {
    return (
      <section>
        <header className="header_fixed">
          <h1 className="header_name">
            Nicolas Roybal
          </h1>
          <ul className="temp">
            <li className="header_content">
              <a onClick={this.scrollToTop}>
                About
              </a>
            </li>
            <li className="header_content">
              <a onClick={this.scrollToProjects}>
                Projects
              </a>
            </li>
            <li className="header_content">
              <a onClick={this.scrollToResume}>
                Résumé
              </a>
            </li>
          </ul>
        </header>
        <header className="header_reletive">
          <ul className="temp">
            <li className="header_content">
              <a onClick={this.scrollToTop}>
                About
              </a>
            </li>
            <li className="header_content">
              <a onClick={this.scrollToProjects}>
                Projects
              </a>
            </li>
            <li className="header_content">
              <a onClick={this.scrollToResume}>
                Résumé
              </a>
            </li>
          </ul>
        </header>
      </section>

    )
  }
})
