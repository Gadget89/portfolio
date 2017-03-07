import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <h2 className="article_title">
          Projects
        </h2>
        <article className="article_wrapper">
          <h3 className="article_title">
            The Gist App
          </h3>
          <img className="article_img" src="styles/assets/The-Gist-App.png">
          </img>
          <p className="article_text">
            This was my final project for the cohort. The idea behind it was to create a note taking app for coders. Anytime a coder needs to research something, they usually get information overload with documentation. In The Gist App, a user can give their note a title, select what type of note is being made, put in a URL to reference the documentation, and create a note with the gist of what makes sense to the user. It organizes notes by type and puts them in the coresponding tab to easily reference. This app was made to be part of coders toolbelt to help keep notes organized and eaisily reference the full documentation if they ever need to.
          </p>
          <a
            className="article_link"
            href="https://the-gist-app.herokuapp.com/#/"
            target="_blank">
            Check it out
            <i className="fa fa-globe fa-2x"></i>
          </a>
          <a
            className="article_link"
            href="https://github.com/Gadget89/gist-app"
            target="_blank">
            Check it out on
            <i className="fa fa-github fa-2x"></i>
          </a>
        </article>
      </section>
    )
  }
})
