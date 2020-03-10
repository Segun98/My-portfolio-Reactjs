import React, {useState} from "react";
import axios from "axios";
import { Helmet } from 'react-helmet';

function Contact({ darkMode }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [moreinfo, setMoreinfo] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }
  
  function handleEmail(e) {
    setEmail(e.target.value);
  }
 
  function handleMoreinfo(e) {
    setMoreinfo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      email: email,
      text:`
      Name: ${name}


      Body: ${moreinfo}`
    };

    axios({
      url: "/api/mail",
      method: "POST",
      data: payload
    })
      .then(() => {
        //console.log("data has been sent to the server");
        alert('MESSAGE SENT!!!')
        // location.reload();
      })
      .catch(() => {
        //console.log("internal server error");
        alert('SORRY FOR THIS INCONVENIENCE, AN ERROR OCCURED. PLEASE USE THE ICONS BELOW THE CONTACT FORM WHILE I FIX THE ISSUE, THANK YOU!');
      });
    setName("");
    setEmail("");
    setMoreinfo("");
  }
 
  return (
    <div className={darkMode ? "contact" : "contact contactDark"}>
      <Helmet>
            <title>Contact Me | Segun Olanitori Portfolio</title>
        </Helmet>
      <h4>Contact Me...</h4>
        <section className="contact-page-body">
          <section className="contact-page-form">
            <div className="contact-form-wrap">
              <form onSubmit={handleSubmit} autoComplete="on">
                <div className="form-wrap">
                  <label htmlFor="Name">Name:</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name..."
                    required
                    autoComplete="on"
                    value={name}
                    onChange={handleName}
                  />
                </div>
                
                <div className="form-wrap">
                  <label htmlFor="email">Email<span style={{fontSize:'12px'}}>(gmail preferably)</span>:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@email.com"
                    autoComplete="on"
                    value={email}
                    onChange={handleEmail}
                  />
                </div>
            
                <div className="form-wrap">
                  <label htmlFor="info">Body:</label>
                  <br />
                  <textarea
                    name="more-info"
                    id="additional-info"
                    cols="30"
                    rows="12"
                    value={moreinfo}
                    onChange={handleMoreinfo}
                    placeholder="Start typing..."
                    required
                  ></textarea>
                </div>
                <div className="form-button">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </section>
        </section>



      <div className="contact-wrap">
        <div className="contact-item">
          <a href="mailto:shegunolanitori@gmail.com" rel="noopener noreferrer">
            <i className="fa fa-envelope contact-icon" aria-hidden="true"></i>
          </a>
        </div>
        <div className="contact-item">
          <a
            href="http://twitter.com/segun_os"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <i className="fab fa-twitter contact-icon" aria-hidden="true"></i>
          </a>
        </div>
        <div className="contact-item">
          <a href="https://wa.me/2348102679869">
            {" "}
            <i className="fab fa-whatsapp contact-icon" aria-hidden="true"></i>
          </a>
        </div>
        <div className="contact-item">
          <a
            href="https://github.com/segun98"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <i
              className="fab fa-github contact-icon"
              aria-hidden="true"
            ></i>{" "}
          </a>
        </div>
        <div className="contact-item">
          <a
            href="https://linkedin.com/in/segun-olanitori-b76275162"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <i className="fab fa-linkedin contact-icon" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
