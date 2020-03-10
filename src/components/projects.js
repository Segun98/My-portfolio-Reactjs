import React from "react";
import { Helmet } from "react-helmet";

function Projects({ darkMode }) {
  return (
    <div className={darkMode ? "projects" : "projects projectsDark"}>
      <Helmet>
        <title>Projects | Segun Olanitori Portfolio</title>
      </Helmet>
      <h4>Some of My Projects...</h4>
      <div className="projects-item">
        <p>
          Find More on
          <a
            href="https://github.com/segun98"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 5px", fontSize: "20px" }}
          >
            Github
          </a>
          and
          <a
            href="https://codepen.io/segun_os"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 5px", fontSize: "20px" }}
          >
            Codepen
          </a>
        </p>
      </div>
      <div className="projects-wrap">
        <div className="project-item">
          <h3>NairaTrack</h3>
          <div className="project-img">
            <img src={require("../images/nairatrack.png")} alt="nairatrack" />
          </div>
          <div className="project-description">
            <p>
              > NairaTrack is an expense and income tracker app. NairaTrack is
              exactly what you need to track your income and spendings.
            </p>
            <p>> Reactjs - Context Api</p>
            <p>> Local Storage</p>
            <p>> PWA</p>
            <div className="project-description-links">
              <a
                href="https://nairatrack.now.sh"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/Segun98/NairaTrack"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h3>Shopping Cart Project</h3>
          <div className="project-img">
            <img
              src={require("../images/cart-project.png")}
              alt="cart-project"
            />
          </div>
          <div className="project-description">
            <p>> Reactjs - Context Api</p>
            <p>> Add to Cart - Delete from Cart - Checkout</p>
            <p>> Local Storage</p>
            <div className="project-description-links">
              <a
                href="https://shoppingcart-project.now.sh"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/Segun98/shopping-cart-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h3>Youtube Clone App</h3>
          <div className="project-img">
            <img
              src={require("../images/youtube-clone.png")}
              alt="youtube-clone"
            />
          </div>
          <div className="project-description">
            <p>
              > Built during the period of Corona Virus, homepage is set to a
              series of videos on how to prevent yourself from the virus
            </p>
            <p>> Reactjs</p>
            <p>> Axios </p>
            <div className="project-description-links">
              <a
                href="https://youtube-clone.segunos.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/Segun98/Youtube-Clone-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h3>Manage Landing Page</h3>
          <div className="project-img">
            <img src={require("../images/manage-page.png")} alt="manage-page" />
          </div>
          <div className="project-description">
            <p>> A basic landing page. A challenge by front-end mentor</p>
            <p>> Form Validation</p>
            <p>> Vanilla JavaScript</p>
            <p>> CSS Grid and Flexbox </p>
            <div className="project-description-links">
              <a
                href="https://segun98.github.io/manage-landing-page/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/Segun98/manage-landing-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h3>Quiz App</h3>
          <div className="project-img">
            <img src={require("../images/quiz-app-sc.png")} alt="quiz-app" />
          </div>
          <div className="project-description">
            <p>> How well do you know Segun?</p>
            <p>> Made with Vanilla JavaScript</p>
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
          <h3>Epl Table Api</h3>
          <div className="project-img">
            <img src={require("../images/epl-table.png")} alt="epl-table" />
          </div>
          <div className="project-description">
            <p>> Reactjs</p>
            <p>> Async/Await</p>
            <div className="project-description-links">
              <a
                href="https://github.com/Segun98/EPL-Table-Footbal-API"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

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
    </div>
  );
}

export default Projects;
