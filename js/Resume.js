import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render() {
    return (
      <section className="center_wrapper">
        <embed
          className="resume_wrapper"
          width="600"
          height="450"
          src="styles/assets/Nicolas Roybal Résumé.pdf"
          type="application/pdf">
        </embed>
      </section>
    )
  }
})
