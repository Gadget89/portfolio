import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render() {
    return (
      <section className="center_wrapper">
        <span className="skills_title">
          Skills
        </span>
        <div className="block">
          <div>
            <img className="skill_block1" src="styles/assets/top-hex.png"></img>
            <div className="test">
            </div>
          </div>
          <div>
            <img className="skill_block" src="styles/assets/left-hex.png"></img>
            <img className="skill_block" src="styles/assets/right-hex.png"></img>
          </div>
        </div>
      </section>
    )
  }
})
