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

          <div className="mySlides first_photo" id="image">
            <img className="slide_image" src="styles/assets/me.jpg" />
            <div className="caption1">
              Trolltunga, Norway
            </div>
          </div>
          <div className="mySlides" id="image">
            <img className="slide_image" src="styles/assets/All_Things_Spurs.png" />
            <div className="caption1">
              Northern Lights, Norway
            </div>
          </div>
          <div className="mySlides" id="image">
            <img className="slide_image" src="styles/assets/me.jpg" />
            <div className="caption1">
              Beautiful Mountains
            </div>
          </div>
          <button className="w3-button w3-display-left w3-black" onClick={this.prevDivs}></button>
          <button className="w3-button w3-display-right w3-black" onClick={this.plusDivs}></button>
        </div>

    )
  }
})
