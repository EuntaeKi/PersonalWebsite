import React from 'react';
import Title from './Title';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import './Library.css';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      overlay: false,
      project: "",
      page: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
  }

  handleOverlayClick(e) {
    /*** Testing code - Needs to be removed when finished ***/
    console.log(e.target.getAttribute("value"));
    if (e.target.getAttribute("value") === "right-arrow") {
      console.log("Right Arrow Clicked!");
    } else if (e.target.getAttribute("value") === "left-arrow") {
      console.log("Left Arrow Clicked!");
    } else if (e.target.getAttribute("value") !== "content") {
      this.setState({
        project: "",
        overlay: false
      });
    }
  }

  handleClick(e) {
    this.setState({ 
      overlay: true,
      project: e.target.value
     });
  }

  render() {
    let overlayVar;

    switch(this.state.project) {
      case "amazon-carry":
        overlayVar = "Amazon carry"
        break;
      case "arm-proc":
        overlayVar = "ARM Processor"
        break;
      case "doctor-fingertip":
        overlayVar = "Doctor at Your Fingertip"
        break;
      default:
    }

    return (
      <div className="project-container" value="container">
        <div 
          className="overlay"
          style={ this.state.project ? { display: "block" } : { display: "none" }}
          onClick={ this.handleOverlayClick }
          value="container" >
          <div className="overlay-content-row">
            <button className="arrow-wrapper" id="left-arrow-wrapper" value="left-arrow">
              <div className="arrow" value="left-arrow" />
            </button>
            <div className="overlay-content content-container" value="content">
              <div className="overlay-heading">
                { overlayVar }
              </div>
            </div>
            <button className="arrow-wrapper" id="right-arrow-wrapper" value="right-arrow">
              <div className="arrow" value="right-arrow" style={{ transform: "rotate(225deg)" }} />
            </button>
          </div>
        </div>
        <div>
          <Title titleText="Projects" />
          <div className="content-container container" id="project-content">
            <div className="row">
              <ProjectButton handleClick={ this.handleClick } btnDesc="Amazon Carry" edgeCheck={ false } />
              <ProjectButton handleClick={ this.handleClick } btnDesc="ARM-based Processor" edgeCheck={ false } />
              <ProjectButton handleClick={ this.handleClick } btnDesc="Doctor at Your Fingertip" edgeCheck={ true } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ProjectButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { btnType: "" };
  }

  componentDidMount() {
    switch (this.props.btnDesc) {
      case "Amazon Carry":
        this.setState({btnType: "amazon-carry"});
        break;
      case "Doctor at Your Fingertip":
        this.setState({btnType: "doctor-fingertip"});
        break;
      case "ARM-based Processor":
        this.setState({btnType: "arm-proc"});
        break;
      default:
        this.setState({btnType: ""});
    }
  }
  
  render() {
    return (
      <div className="col-4" style={{ padding: 0 }}>
        <div className="btn-container">
          <button 
            className={`btn project-btn ${ this.state.btnType } `} 
            onClick={ (e) => this.props.handleClick(e) }
            style={ this.props.edgeCheck ? { } : { borderRight: "1px solid #838383" }}
            value={ this.state.btnType } >
            <p className="project-btn-text">{ this.props.btnDesc }</p>
          </button>
        </div>
      </div>
    );
  }
}

export default Projects;
