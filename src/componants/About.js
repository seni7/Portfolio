import React from 'react'
import "./About.css";
function About() {
  return (
<div className='about'>
    <div className="about-container">
     <div className="about-desc">
  <h3>Let me tell you something about me</h3>
  <p><strong>name:</strong>Senait Alemayehu</p>
  <p><strong>Age:</strong>25</p>
  <p><strong>Education:</strong>Addis Ababa Science And Technology University</p>
  <p><strong>Phone:</strong>+251 925361823</p>
  <p><strong>City:</strong>Addis Ababa, Ethiopia</p>
  <p className="email"><strong>email:</strong><a href='mailto: senaitalemayehu27@gmail.com'>senaitalemayehu27@gmail.com</a></p>
  <p className="about-none">
  I am a young full-stack web developer, working on web development, using’  HTML, CSS, BOOTSTRAP and REACT JAVASCRIPT’ for the front end and ‘EXPRSS and NODE’ as a backend .I have been learning at a coding  Boot -camp called EVANGADI for six month. Know I am very interested working on  web development, And I can still continue learning more and more through period.        </p>
</div>

<div className="about-img">
  <img
    src="http://www.idieate.com/img/static-webdesign.png" width="400" height="360"
    alt="about"
  />
</div>
</div>
    </div>
  )
}

export default About