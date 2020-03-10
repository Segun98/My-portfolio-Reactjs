import React from "react";
import { Helmet } from "react-helmet";

function About({ darkMode }) {
  return (
    <div className={darkMode ? "about" : "about aboutDark"}>
      <Helmet>
        <title>About | Segun Olanitori Portfolio</title>
      </Helmet>
      <h3
        style={{
          textAlign: "center",
          textDecoration: "underline",
          paddingTop: "20px"
        }}
      >
        About Me...
      </h3>
      <div className="about-wrap">
        <div className="about-image">
          <img src="favicon.jpg" alt="about-img" />
        </div>
        <div className="about-text">
          <p>
            I am an internet taught front-end web developer based in Lagos, Nigeria. I wrote my first HTML
            in July 2019, in my final year in the university.
          </p>{" "}
          <br />
          <p>
            {" "}
            I am interested in building solutions on the web with concern for Functionality,
            Responsiveness, Search Engine Optimization (SEO), Image
            Optimization, User Interface and Experience (UI/UX). I love to solve
            problems and I am passionate about learning new technologies.
            </p>
            <br/>
            <p>
              Technologies I look to learn this year include: GraphQl and
              ExpressJs. In the future, I plan to learn React Native  and
              another back-end programming language: One of Python's
              Django/Flask, PHP's Laravel, GoLang or Ruby (so help me God lol).
            </p>
          {" "}
          <br />
          <p>
            I am an ex-intern at HNG6 Internship as a front end developer and a
            Business Administration graduate (B.Sc).
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default About;
