import React from 'react'

function About( {darkMode} ) {
    return (
        <div className={darkMode? 'about' : 'about aboutDark'}>
            <h3 style={{textAlign: 'center', textDecoration: 'underline', paddingTop: '20px'}}>About Me...</h3>
            <div className="about-wrap">
                <div className='about-image'>
                    <img src="favicon.jpg" alt="aboutImage"/>
                    {/* <img src="https://res.cloudinary.com/dowrygm9b/image/upload/v1574429462/favicon_ksdmx2.jpg" alt="about-me" /> */}
                </div>
                <div className='about-text'>
                    <p>I am a self taught front-end web developer based in Lagos, Nigeria. I wrote my first HTML in July 2019,
                in my final year in the university.</p> <br/>
                    <p> I am interested in building modern websites with concern for Responsiveness, Search Engine Optimization (SEO), Image Optimization, User Interface and Experience (UI/UX). I love to solve problems and
                I am passionate about learning new technologies. </p> <br/>
                    <p>I am an ex-intern at HNG6 Internship as a front end
                    developer and a
                Business Administration graduate (B.Sc).</p>
                <br/>
                </div>
            </div>
        </div>
    )
}

export default About;