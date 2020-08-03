import React from 'react';
import Title from './Title';
//import ProjJSON from './Projects.json';
import { exData } from './ProjectsData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import './Library.css';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      overlay: false,
      project: "",
      page: 0,
      pageEnd: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  handleOverlayClick(e) {
    if (e.target.getAttribute("value") === "right-arrow") {
      this.setState({ page: this.state.page + 1 })
    } else if (e.target.getAttribute("value") === "left-arrow") {
      this.setState({ page: this.state.page - 1 })
    } else if (e.target.getAttribute("value") === "container") {
      this.setState({
        project: "",
        overlay: false,
        page: 0,
        pageEnd: ""
      });
      document.body.style = 'overflow-y: auto;';
    }
  }

  handleClick(e) {
    this.setState({ 
      overlay: true,
      project: e.currentTarget.value,
      pageEnd: (exData[e.currentTarget.value].header).length - 1,
     });
    document.body.style = 'overflow-y: hidden;';
  }

  render() {
    return (
      <div className="project-container" value="container">
        <div 
          className="overlay"
          style={ this.state.project ? { display: "block" } : { display: "none" }}
          value="container" >
          <div className="overlay-content-row" value="container" onClick={ (e) => this.handleOverlayClick(e) }>
            { this.state.page !== 0 ? 
              <button className="arrow-wrapper" id="left-arrow-wrapper" value="left-arrow">
                <div className="arrow" value="left-arrow" />
              </button> : <div className="arrow-dummy" /> }
            <ProjectLayout 
              value="content"
              page={ this.state.page }
              project={ this.state.project } />
              { this.state.page !== this.state.pageEnd ? 
              <button className="arrow-wrapper" id="right-arrow-wrapper" value="right-arrow">
                <div className="arrow" value="right-arrow" style={{ transform: "rotate(225deg)" }} />
              </button> : <div className="arrow-dummy" /> }
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
        this.setState({btnType: "arm-processor"});
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
            <p className="project-btn-text">
              { this.props.btnDesc }
            </p>
          </button>
        </div>
      </div>
    );
  }
}

function ProjectLayout(props) {
  var projectList = [];
  if ( props.project) {
    for (var i = 0; i < exData[props.project].content[props.page].length; i++) {
      projectList.push(<li key={i}> { exData[props.project]["content"][props.page][i] } </li>);
    }
  }
  return (
    <div className="row" style={{ width: "85%", margin: 0, color: "#F5F5DC" }}>
      <div
        className="overlay-content-half col-6">
        <h2 className="overlay-header"> { props.project ? exData[props.project].header[props.page] : "" } </h2>
        <div className="heading-bar" style={{ borderColor: "#F5F5DC", margin: "1rem 0" }} />
        <ul>
          { projectList }
        </ul>
      </div>
      <div
        className="overlay-content-half col-6"
        value="content"
        style={{ backgroundColor: "#604C88", borderColor: "#604C88" }}>
          <img
            src={ props.project ? exData[props.project].image[props.page] : "" }
            alt={ props.project ? exData[props.project].imageAlt[props.page] : "" }
            className="overlay-content-image" />
      </div>
    </div>
  );
}

export default Projects;