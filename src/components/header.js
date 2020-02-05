import React, { useState } from 'react';
import { Link } from "react-router-dom";



function Header({darkMode, handleDarkmode}) {

    const [nav, setnav] = useState(true)
    

    const toggleNav = () => {
        setnav(prevNav => !prevNav)
    }

    const linkstyle = {
        color: 'black',
        textDecoration: 'none'
    }
    const navLight={
        backgroundColor: 'whitesmoke',
        color: '#333'
    }
    const navDark={
        backgroundColor: 'black',
        color: 'white'
    }
    return (
        <div className="header-component">
            <div className={darkMode? 'header' : 'header headerDark'}>
                <div className="header-wrap">
                    <div className="hamburger" onClick={toggleNav}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    <Link to='/' style={linkstyle}>
                        <div className='logo'>SegunOS</div>
                    </Link>
                    {/* <div className="available" style={{ color: 'white' }}> <i className="fa fa-circle fa-xs" aria-hidden="true" style={{ color: 'rgb(73, 240, 73)' }}></i> Available for hire</div> */}
                    <div className="darkModeIcon" onClick={handleDarkmode}>
                        {darkMode? 'Darkmode' : 'Lightmode'}
                    </div>
                </div>
            </div>
            <div className={nav ? "nav" : "nav navOpen"} style={darkMode? navLight : navDark}>
                <div className="nav-wrap">
                    <div className="nav-img">
                        <img src={require("../images/icons8-working-with-a-laptop-64.png")} alt="img" id="nav-img" />
                    </div>
                    <hr />
                    <div className="social-icons">
                        <a href="http://twitter.com/segun_os" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="https://wa.me/2348102679869"> <i className="fab fa-whatsapp" aria-hidden="true"></i></a>
                        <a href="https://github.com/segun98" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github" aria-hidden="true"></i> </a>
                        <a href="https://linkedin.com/in/segun-olanitori-b76275162" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"
                            aria-hidden="true"></i></a>
                    </div>
                    <div className="nav-text">
                        Nothing else to see here <img src={require('../images/icons8-communication-skill-64.png')} alt="twitter" className="nav-text-icon" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;
