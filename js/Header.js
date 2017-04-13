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
          <span className="header_name">
            Nicolas Roybal
          </span>
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
                Skills
              </a>
              </li>
              <li  className="header_content">
                <a
                  href="https://form.jotform.us/70884700284156"
                  target="_blank">
                  Contact
                </a>
              </li>
              <li className="header_content">
                <a
                  href="https://drive.google.com/file/d/0B52FYDuPpv0fdjAzcnJSSUttMFU/view?usp=sharing"
                  target="_blank">
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
                Skills
              </a>
            </li>
            <li className="header_content">
              <a
                href="https://form.jotform.us/70884700284156"
                target="_blank">
                Contact
              </a>
            </li>
            <li className="header_content">
              <a
                href="https://drive.google.com/file/d/0B52FYDuPpv0fdjAzcnJSSUttMFU/view?usp=sharing"
                target="_blank">
                Résumé
              </a>
            </li>
          </ul>
        </header>
      </section>

    )
  }
})
