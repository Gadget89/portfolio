import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section className="center_wrapper">
        <span className="skills_title">
          Skills
        </span>
        <ul className="skills">
          <li>
            HTML5
          </li>
          <li>
            CSS3
          </li>
          <li>
            Javascript
          </li>
          <li>
            Node.js
          </li>
          <li>
            React.js
          </li>
          <li>
            jQuery
          </li>
          <li>
            NPM
          </li>
          <li>
            Jest
          </li>
          <li>
            AJAX
          </li>
          <li>
            Babel
          </li>
        </ul>
        <img className="skill_img" src="styles/assets/HTML5.png">
        </img>
        <img className="skill_img" src="styles/assets/jest.svg">
        </img>
        <img className="skill_img" src="styles/assets/jquery.gif">
        </img>
        <img className="skill_img" src="styles/assets/nodejs.png">
        </img>
        <img className="skill_img" src="styles/assets/npm.png">
        </img>
        <img className="skill_img" src="styles/assets/react.png">
        </img>
      </section>
    )
  }
})
