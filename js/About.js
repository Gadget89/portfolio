import React from 'react'
import { Link } from 'react-router'
import ReactSiema from 'react-siema'
const Slide = (props) => <img {...props} alt="slide" />

const App = () => {
    let slider

    return (
        <div className="slider">
            <ReactSiema ref={siema => slider = siema}>
                <Slide src="styles/assets/me1.jpg" />
                <Slide src="styles/assets/me.jpg" />
            </ReactSiema>
        </div>
    )
}

export default React.createClass({
  scrollToContact() {
    window.scroll(0, 2400)
  },
  render() {
    return (
      <section className="center_wrapper">

        <img className="profile_img" src="styles/assets/me1.jpg"></img>
        <span className="profile_title">Nicolas Roybal</span>
        <span className="sub_title">Front-End Developer</span>
        <span className="section_divider">

        </span>
          <p className="profile_txt">
            I began my journey to become a software developer in the Fall of 2016. I've had the great privilege to learn from accomplished instructors at The Iron Yard and I graduated from their Front-End Engineering program in February 2017.
          </p>
          <p className="profile_txt">
            After gaining a solid foundation, I am excited for this lifetime adventure. My curiosity and passion for code continue driving me to keep learning as much as I can.
          </p>
          <p className="profile_txt">
            I would like to join a great team and be involved in projects that I can be proud of. I invite you to check out my projects and please feel free to <a href="https://form.jotform.us/70884700284156"
            target="_blank"
            className="myContactInfo">
              contact me.
            </a>
          </p>
      </section>
    )
  }
})
