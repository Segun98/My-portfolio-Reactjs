import React from 'react';
import { Link } from "react-router-dom";


function Footer({ darkMode }) {

   const linkstyle = {
      color: 'white',
      textDecoration: 'none',

   }

   return (
      <div className={darkMode ? 'footer' : 'footer footerDark'}>
         <div className="footer-wrap">
            <div className="footer-home" title='Home'>
               <Link to='/' style={linkstyle} className="footer-link">
                  <i className="fa fa-home icon" aria-hidden="true"></i><br />
                  <span>Home</span>
               </Link>
            </div>
            <div className="footer-about" title='About'>
               <Link to='/about' style={linkstyle} className="footer-link">
                  <i className="fas fa-portrait icon"></i><br />
                  <span>About</span>
               </Link>
            </div>
            {/* <div className="footer-services">
               <Link to='/services' style={linkstyle}>
                  <i className="fab fa-servicestack icon"></i><br />
                  <span>Services</span>
               </Link>
            </div> */}
            <div className="footer-skills" title='Skills' >
               <Link to='/skills' style={linkstyle} >
                  <i className="fas fa-users-cog icon"></i><br />
                  <span>Skills</span>
               </Link>
            </div>
            <div className="footer-projects" title='Projects'>
               <Link to='/projects' style={linkstyle}>
                  <i className="fa fa-tasks icon" aria-hidden="true"></i><br />
                  <span>Projects</span>
               </Link>
            </div>
            <div className="footer-contact" title='Contact'>
               <Link to='/contact' style={linkstyle} >
                  <i className="fas fa-phone-volume icon"></i><br />
                  <span>Contact</span>
               </Link>
            </div>
         </div>
      </div>
   )
}

export default Footer;
