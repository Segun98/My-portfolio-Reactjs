import React from "react";

function Projects({ darkMode }) {
  return (
    <div className={darkMode ? "projects" : "projects projectsDark"}>
      <h4>Some of My Projects...</h4>
      <div className="projects-wrap">
        <div className="project-item">
          <h3>Bookmark Landing Page</h3>
          <div className="project-img">
            <img src={require("../images/Bookmark-page.png")} alt="clip" />
          </div>
          <div className="project-description">
            <p>> CSS Grid & Flexbox</p>
            <p>> JavaScript form validation</p>
            <div className="project-description-links">
              <a
                href="https://segun98.github.io/Bookmark-landing-page/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/Segun98/Bookmark-landing-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="project-item">
          <h3>JavaScript Quiz App</h3>
          <div className="project-img">
            <img src={require("../images/quiz-app-sc.png")} alt="quiz-app" />
          </div>
          <div className="project-description">
            <p>> Vanilla JavaScript</p>
            <p>> HTML & CSS </p>
            <div className="project-description-links">
              <a
                href="https://segun98.github.io/Javascript-Quiz-App-Segun/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/Segun98/Javascript-Quiz-App-Segun"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="project-item">
          <h3>Clipboard Landing Page</h3>
          <div className="project-img">
            <img src={require("../images/clipboard-img.png")} alt="clip" />
          </div>
          <div className="project-description">
            <p>> CSS Grid & Flexbox</p>
            <p>> Responsive</p>
            <div className="project-description-links">
              <a
                href="https://segun98.github.io/Clipboard-Landing-Page/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/Segun98/Clipboard-Landing-Page"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="project-item">
          <h3>Flyo Landing Page</h3>
          <div className="project-img">
            <img src={require("../images/flyo-img.png")} alt="clip" />
          </div>
          <div className="project-description">
            <p>> CSS Grid & Flexbox</p>
            <p>> Responsive</p>
            <div className="project-description-links">
              <a
                href="https://segun98.github.io/Fylo-dark-theme-landing-page/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/Segun98/Fylo-dark-theme-landing-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-item">
        <p>
          Find More on 
          <a
            href="https://codepen.io/segun_os"
            target="_blank"
            rel="noopener noreferrer"
            style={{margin:'0 5px'}}
          >
            Codepen 
          </a>
          and 
          <a
            href="https://github.com/segun98"
            target="_blank"
            rel="noopener noreferrer"
            style={{margin:'0 5px'}}
          >
             Github
          </a>
        </p>
      </div>
    </div>
  );
}

export default Projects;
