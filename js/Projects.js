import React from 'react'
import { Link } from 'react-router'
import ReactSiema from 'react-siema'

// -----------------------siema
const Slide = (props) => <img {...props} alt="slide" />

const App = () => {
    let slider

    return (
        <div className="slider">
            <ReactSiema ref={siema => slider = siema}>
                <Slide src="styles/assets/laptop-gist.png" />
                <Slide src="styles/assets/laptop-gist.png" />
                <Slide src="styles/assets/laptop-blog.png" />
            </ReactSiema>
            <span className="slider_wrapper">
              <button className="#" onClick={() => slider.prev()}>prev</button>
              <button className="#" onClick={() => slider.next()}>next</button>
            </span>
        </div>
    )
}
export default React.createClass({

  render() {
    return (
      <section>
        <App/>
        <span className="article_heading">
          Projects
        </span>
        <article className="article_wrapper">
          <a className="article_title-left"
            target="_blank"
            href="https://the-gist-app.herokuapp.com/#/">
            The Gist App
          </a>

          <a target="_blank"
          href="https://the-gist-app.herokuapp.com/#/">
            <div className="projOverlay_left">
              <img className="projOverlay_image" className="slide_image" src="styles/assets/laptop-gist.png">
              </img>
              <div className="overlay">
                <div className="projOverlay_text">
                Check it out!
                </div>
              </div>
            </div>
          </a>

          <p className="article_text">
            I created an app for the developers toolbelt to help keep their notes organized.
          </p>
          <p className="article_text">
            After successfully logging in, a user is able to make a note type selection, give it a title, add a URL and create a note. The new note is added to the corresponding tab for easy reference. This app helps prevent information overload from web research and makes it easy to take notes for developers.
          </p>
          <p className="article_text">
            Technologies: HTML, CSS, REACT, FIREBASE, AND HEROKU
          </p>
        </article>

        <article className="article_wrapper">
          <a className="article_title-right"
            target="_blank"
            href="https://client-week-project.herokuapp.com/">
            All Things Spurs
          </a>
          <a target="_blank"
          href="https://client-week-project.herokuapp.com/">
            <div className="projOverlay_right">
              <img className="projOverlay_image" src="styles/assets/All_Things_Spurs.png">
              </img>
              <div className="overlay">
                <div className="projOverlay_text">
                Check it out!
                </div>
              </div>
            </div>
          </a>

          <p className="article_text">
            This was a the first group project I was a part of during my time at The Iron Yard. The objective was to create a Spurs blog as a team using all of the technologies we had aquired in the first half of the cohort. It was a great expierience to get adjusted to working on a development team. We used Trello as a management tool and Github for version control.
          </p>
          <p className="article_text">
            Technologies: HTML, CSS, REACT, JASMINE, TRAVIS AND HEROKU
          </p>
        </article>

      </section>
    )
  }
})
