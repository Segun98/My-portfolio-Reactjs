import React, { useState } from 'react';
import './App.css';
import Intro from './components/intro';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
// import Services from './components/services';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [darkMode, setDarkmode] = useState(true)
  function handleDarkmode() {
    setDarkmode(prevMode => !prevMode)
    console.log('darkMode event fired')
  }
  return (
    <Router>
      <div className="app">
        <Header darkMode={darkMode} handleDarkmode={handleDarkmode} />
      <Switch>
          <Route path="/" exact render= {props => (<Intro {...props} darkMode={darkMode} />)} />
          <Route path="/about" render= {props => (<About {...props} darkMode={darkMode} />)} />
          {/* <Route path="/services" component={Services} /> */}
          <Route path="/skills" render= {props => (<Skills {...props} darkMode={darkMode} />)} />
          <Route path="/projects" render= {props => (<Projects {...props} darkMode={darkMode} />)} />
          <Route path="/contact" render= {props => (<Contact {...props} darkMode={darkMode} />)} />
      </Switch>
        <Footer darkMode={darkMode} />
      </div>
    </Router>

  );
}

export default App;
