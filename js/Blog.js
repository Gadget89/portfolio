import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <h1>Blog</h1>
        <button className="nav_button"><Link to="/">Home</Link></button>
        <p>
          <b>Past != Future </b><br></br>
        This week marks the half way point of my journey through the Front End Engineering program at The Iron Yard in San Antonio, TX. In six weeks I have grown my understanding of software development but more than anything else, I feel the most important thing I’ve accomplished in this course is to learn how to learn. That may sound silly, but it has helped influence my perspective on how I approach obstacles.<br></br>
      The word “learning” seems straightforward, to simply gain knowledge through studying and instruction. This is true and it does indeed work. Everything is a learning experience and we have the opportunity to improve from our knowledge. Failures are a fundamental part of learning. If you strive to improve, you truly have learned from you past experiences. Don’t be static, ask questions, ask for help, admit when you don’t know something, and continue improving.<br></br>
    Over the course I have experienced many shortcomings, but my instructor helped me understand that we learn from these kinds of experiences. I’ve found that a better measurement than failure, is levels of success. Learning software development is completely new to me and I have had a lot of learning opportunities along the way. I know this journey will lead to more learning opportunities beyond my time at The Iron Yard and it’s exciting to know through continuous learning, I’ll keep growing at this.<br></br>
    Everyone is learning and the past does not equal the future!
        </p>
        <div>
          <a target="_blank" href="https://medium.com/@nicolas.roybal/past-future-f982a66d5a66#.m9baco2be">Check out my blog on Medium</a>
        </div>
      </section>
    )
  }
})
