import React from 'react'
import { Link } from 'react-router'
var slideIndex = 1;
export default React.createClass({

plusDivs() {
  slideIndex++
  if (slideIndex > 7){
    slideIndex = 1
  }
  this.showDivs(slideIndex);
},
prevDivs() {
  slideIndex--
  if (slideIndex > 7){
    slideIndex = 1
  }
  this.showDivs(slideIndex);
},
showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
},

  render() {
    return (

          <div className="wrapper">
            <span className="article_heading">
              Projects
            </span>
          <div className="mySlides first_photo" id="image">
            <img className="slide_image" src="styles/assets/laptop-gist.png" />
            <div className="caption">
              <a className="article_title-left"
                target="_blank"
                href="https://the-gist-app.herokuapp.com/#/">
                The Gist App
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
            </div>
          </div>
          <div className="mySlides" id="image">
            <img className="slide_image" src="styles/assets/laptop-sudoku.png" />
            <div className="caption">
              <a className="article_title-left"
                target="_blank"
                href="https://sudoku-puzzle-sa.herokuapp.com/#/">
                Sudoku Solver
              </a>
              <p className="article_text">
                Do you ever play sudoku? This app was created to solve sudoku puzzles. It is a great tool help you out when you get stuck or it can be used to impress your friends with how fast you can solve a puzzle!
              </p>
              <p className="article_text">
                You simply put in the given numbers from your puzzle and it will fill in all the empty cells. It can also identify if a puzzle you entered can be solved. Finally, it displays how many numbers it attempted for each cell.
              </p>
              <p className="article_text">
                Technologies: HTML, CSS, REACT, FIREBASE, AND HEROKU
              </p>
            </div>
          </div>
          <div className="mySlides" id="image">
            <img className="slide_image" src="styles/assets/laptop-blog.png" />
            <div className="caption">
              <a className="article_title-right"
                target="_blank"
                href="https://client-week-project.herokuapp.com/">
                All Things Spurs
              </a>
              <p className="article_text">
                This was a the first group project I was a part of during my time at The Iron Yard. The objective was to create a Spurs blog as a team using all of the technologies we had aquired in the first half of the cohort. It was a great expierience to get adjusted to working on a development team. We used Trello as a management tool and Github for version control.
              </p>
              <p className="article_text">
                Technologies: HTML, CSS, REACT, JASMINE, TRAVIS AND HEROKU
              </p>
            </div>
          </div>
          <div className="slider_nav">
            <span className="slide_left">
              <a
                className="nav_button"
                target="_blank"
                onClick={this.prevDivs}>
                <div
                  className="hex_top_slider">
                </div>
                <div
                  className="hex_middle_slider"
                  data-balloon-length="small"
                  data-balloon="Previous"
                  data-balloon-pos="left">
                  <i
                    className="fa fa-arrow-left fa-2x">
                  </i>
                </div>
                <div
                  className="hex_bottom_slider">
                </div>
              </a>
            </span>
            <span className="slide_right">
              <a
                className="nav_button"
                target="_blank"
                onClick={this.plusDivs}>
                <div
                  className="hex_top_slider">
                </div>
                <div
                  className="hex_middle_slider"
                  data-balloon-length="small"
                  data-balloon="Next"
                  data-balloon-pos="right">
                  <i
                    className="fa fa-arrow-right fa-2x">
                  </i>
                </div>
                <div
                  className="hex_bottom_slider">
                </div>
              </a>
            </span>

          </div>

        </div>

    )
  }
})
