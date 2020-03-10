import React from "react";
import { Helmet } from 'react-helmet';

function Skills({ darkMode }) {
  return (
    <div className={darkMode ? "skills" : "skills skillsDark"}>
      <Helmet>
            <title>Skills | Segun Olanitori Portfolio</title>
        </Helmet>
      <h3>My Current Skills include...</h3>
      <div className="skills-wrap">
        <div className="skills-item">
          <img
            src={require("../images/8905768601551941711.svg")}
            alt="img"
            id="next-img"
            style={{ width:'160px', height: 'auto', cursor:'pointer'}}
          />
          <br />
          <span>NextJs</span>
        </div>
        <div className="skills-item">
          <i className="fab fa-react skills-icon"></i>
          <br />
          <span>ReactJs</span>
        </div>
        <div className="skills-item">
          <i className="fab fa-html5 skills-icon"></i>
          <br />
          <span>HTML5</span>
        </div>
        <div className="skills-item">
          <i className="fab fa-js-square skills-icon"></i>
          <br />
          <span>Vanilla Javascript</span>
        </div>
        <div className="skills-item">
          <i className="fab fa-css3-alt skills-icon"></i>
          <br />
          <span>CSS3</span>
        </div>
        <div className="skills-item">
          <i className="fab fa-bootstrap skills-icon"></i>
          <br />
          <span>BootStrap</span>
        </div>
        <div className="skills-item">
          <i className="fab fa-js-square skills-icon"></i>
          <br />
          <span>Jquery</span>
        </div>
        <div className="skills-item">
          <i className="fab fa-git-square skills-icon"></i>
          <br />
          <span>git</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
