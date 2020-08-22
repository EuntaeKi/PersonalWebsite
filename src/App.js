import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Library.css';

import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
import LinkButton from './components/LinkButton';
import Background from './img/background-image.png';


class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

const Scroll = withRouter(ScrollToTop);

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
    let backgroundOverflow;
    let homeHeight;

    switch(window.location.pathname.substring(1)) {
      case "home":
        appBackgroundImage = { backgroundImage: `url(${ Background })` };
        navBarColor = { backgroundColor: "transparent" };
        backgroundOverflow = { overflow: "hidden" };
        homeHeight = { height: "100vh" };
        break;
      case "about":
        appBackgroundImage = { backgroundColor: "#2D253A" };
        navBarColor = { backgroundColor: "#3A3346" };
        backgroundOverflow = { overflow: "overlay" };
        break;
      case "resume":
        appBackgroundImage = { backgroundColor: "#3D3350" };
        navBarColor = { backgroundColor: "#49405B" };
        break;
      case "projects":
        appBackgroundImage = { backgroundColor: "#2D324C" };
        navBarColor = { backgroundColor: "#3A3F57" };
        backgroundOverflow = { overflow: "overlay" };
        break;
      default:
    }

    return (  
      <BrowserRouter>
        <Scroll />
        <NavBar
          hover={this.state.hover}
          active={this.state.active}
          handleNavClick={(key) => { this.handleClick(key) }}
          handleNavEnter={(key) => { this.handleEnter(key) }}
          navBarColor={navBarColor}
        />
        <div
          className="app-background"
          style={ window.location.pathname.substring(1) !== "home" ?
            { ...appBackgroundImage, ...backgroundOverflow } : 
            { ...appBackgroundImage, ...backgroundOverflow, ...homeHeight }} >
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/"> <Redirect to="/home" /> </Route>
          </Switch>
        </div>
        {(window.location.pathname.substring(1) !== "home" && window.location.pathname !== "/") &&
          <Footer
            footerTheme={ window.location.pathname.substring(1) === "projects" ?
            { backgroundColor: "#41466D" } : 
            { backgroundColor: "#482B47" } }
          />
        }
      </BrowserRouter>
    );
  }
}


class NavBar extends React.Component {
  render() {
    return (
      <div className="top-nav-bar" style={ this.props.navBarColor }>
        <div className={ `container ${ this.props.navBarTop ? "top-nav-bar-container" : ""}` }>
          <div className="row">
            <div className="offset-3" />
            {["home", "about", "resume", "projects"].map(key =>
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
        <SocialMedia />
        <hr id="footer-hr" />
        <div className="row" style={{ margin: "0 0 0.125rem 0" }}>
          <FontAwesomeIcon
            style={{ fontSize: "1.25rem", margin: "0 0.25rem 0 auto" }}
            icon={ faEnvelope } size="2x" transform="shrink-4 up-1" />
          <p className="footer-text">|</p>
          <p className="footer-text" style={{ margin: "0 auto 0 0.25rem" }}>euntaeki@outlook.com</p>
        </div>
        <p align="center" className="footer-text"> © 2020 Euntae Ki All rights reserved.</p>
      </div>

    )
  }
}

export default App;
