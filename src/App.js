import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import './components/Library.css';

import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import LinkButton from './components/LinkButton';
import Background from './img/background-image.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: window.location.pathname.substring(1),
      hover: "null",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleClick(key) {
    this.setState({ active: key });
  }

  handleEnter(key) {
    this.setState({ hover: key });
  }

  render() {
    let appBackgroundImage;
    let navBarColor;
    let footerTheme;
    let backgroundOverflow;

    switch(window.location.pathname.substring(1)) {
      case "home":
        appBackgroundImage = { backgroundImage: `url(${ Background })` };
        navBarColor = { backgroundColor: "#ffffff10" };
        footerTheme = { backgroundColor: "#482B47" };
        backgroundOverflow = { overflow: "hidden" };
        break;
      case "about":
        appBackgroundImage = { backgroundImage: "none", backgroundColor: "#2D253A" };
        navBarColor = { backgroundColor: "#3A3346" };
        footerTheme = { backgroundColor: "#482B47" };
        backgroundOverflow = { overflow: "overlay" };
        break;
      case "resume":
        appBackgroundImage = { backgroundImage: "none", backgroundColor: "#3D3350" };
        navBarColor = { backgroundColor: "#49405B" };
        footerTheme = { backgroundColor: "#482B47" };
        backgroundOverflow = { overflow: "overlay" };
        break;
      case "projects":
        appBackgroundImage = { backgroundImage: "none", backgroundColor: "#2D324C" };
        navBarColor = { backgroundColor: "#3A3F57" };
        footerTheme = { backgroundColor: "#41466D" };
        backgroundOverflow = { overflow: "overlay" };
        break;
      default:
        appBackgroundImage = { backgroundImage: `url(${ Background })` };
        navBarColor = { backgroundColor: "#ffffff10" };
    }

    return (  
    <React.Fragment>
      <div 
        className="app-background"
        style={{ ...appBackgroundImage, ...backgroundOverflow }}
      >
        <NavBar
          navBarTop={ this.state.active !== "home" }
          hover={ this.state.hover }
          active={ this.state.active }
          handleNavClick={ (key) => { this.handleClick(key) }}
          handleNavEnter={ (key) => { this.handleEnter(key) }}
          navBarColor={ navBarColor }
        />
        <Switch>
          <Route exact path="/about"> <About /> </Route>
          <Route exact path="/resume"> <Resume /> </Route>
          <Route exact path="/projects"> <Projects /> </Route>
          <Route exact path="/contact"> <Contact /> </Route>
          <Route exact path="/home"> <Home /> </Route>
          <Route exact path="/"> <Redirect to="/home" /> </Route>
        </Switch>
        { (window.location.pathname.substring(1) !== "home" && window.location.pathname !== "/") &&
          <Footer
            footerTheme={ footerTheme }
          />
        }
      </div>
    </React.Fragment>
    );
  }
}

class NavBar extends React.Component {
  render() {
    return (
      <div className={ this.props.navBarTop ? "top-nav-bar" : "" } style={ this.props.navBarColor }>
        <div className={ `container ${ this.props.navBarTop ? "top-nav-bar-container" : ""}` }>
          <div className="row">
            <div className="offset-3" />
            {["home", "about", "resume", "projects", "contact"].map(key =>
              <LinkButton 
                key={ key }
                to={`/${ key }`}
                className={`col butn ${ key === this.props.hover ? 'hoverbtn' : '' }`}
                id={key === this.props.active ? 'selected' : '' }
                onClick={() => this.props.handleNavClick(key)}
                onMouseEnter={() => this.props.handleNavEnter(key)}
                onMouseLeave={() => this.props.handleNavEnter(null)}
              >
              { key.charAt(0).toUpperCase() + key.substring(1) }
              </LinkButton>)
            }
            <div className="offset-3" />
          </div>
        </div>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container" style={ this.props.footerTheme }>
        <p align="center" className="footer-text"> © 2020 Euntae Ki All rights reserved. </p>
        <SocialMedia />
      </div>

    )
  }
}

export default App;
