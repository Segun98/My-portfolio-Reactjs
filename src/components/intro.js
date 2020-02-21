import React from 'react'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';



function Intro({ darkMode }) {

  const linkstyle = {
    color: 'white',
    textDecoration: 'none',

  }
 
  return (
    <div className={darkMode ? 'intro' : 'intro introDark'}>
          <Helmet>
            <title>Home | Segun Olanitori Portfolio</title>
        </Helmet>
      <div className="intro-description">
        {/* <p>Welcome to My Portfolio!</p> */}
        <p>I am <span style={{ color: 'hsl(228, 45%, 44%)' }}>Segun Olanitori</span> </p>
        <p> A self-taught Front-End Web Developer who loves to build user friendly websites with the best technologies.</p>
      </div>
      <div className="intro-items">
        <Link to='/contact' style={linkstyle}>
          <button style={{ marginBottom: '30px', marginTop: '10px' }}>Contact Me </button>
        </Link>
        <p style={{ margin: '10px 0' }}> <i className="fas fa-map-marker-alt"></i> Lagos, Nigeria.</p>
        <div className="intro-items-react" style={{ display: 'flex' }}>
          <p>Made With React </p> <i className="fab fa-react"></i>
        </div>
      </div>
    </div >

  )
}

export default Intro;