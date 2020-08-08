import React from 'react';
import Title from './Title';
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
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
  }

  handleOverlayClick(e) {
    if (e.target.getAttribute("value") === "right-arrow") {
      this.setState({ page: this.state.page + 1 })
    } else if (e.target.getAttribute("value") === "left-arrow") {
      this.setState({ page: this.state.page - 1 })
    } else if (e.target.getAttribute("value") === "container") {
      this.setState({ project: "", overlay: false, page: 0, pageEnd: "" });
      document.body.style = 'overflow-y: none;';
    }
  }

  handleKeyDown(e) {
    console.log("KeyCode: " + e.keyCode);
    if (this.state.overlay && e.keyCode === 27) {
      this.setState({ overlay: false, page: 0, pageEnd:"", project: "" });
      document.body.style = 'overflow-y: none;';
    } else if (this.state.overlay && e.keyCode === 39 && this.state.pageEnd !== this.state.page) {
      this.setState({ page: this.state.page + 1 });
    } else if (this.state.overlay && e.keyCode === 37 && this.state.page !== 0) {
      this.setState({ page: this.state.page - 1 });
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
      <div className="project-container" tabIndex="0" value="container"
        onKeyDown={ (e) => this.handleKeyDown(e) } >
        <div className="overlay" value="container" 
          style={ this.state.project ? { display: "block" } : { display: "none" }} >
          <div className="overlay-content-row" value="container" 
            onClick={ (e) => this.handleOverlayClick(e) }>
            { this.state.page !== 0 ? 
              <button className="arrow-wrapper" id="left-arrow-wrapper" value="left-arrow">
                <div className="arrow" value="left-arrow" />
              </button> : <div className="arrow-dummy" /> }
            <ProjectLayout value="content" page={ this.state.page } project={ this.state.project } />
              { this.state.page !== this.state.pageEnd ? 
              <button className="arrow-wrapper" id="right-arrow-wrapper" value="right-arrow">
                <div className="arrow" value="right-arrow" style={{ transform: "rotate(225deg)" }} />
              </button> : <div className="arrow-dummy" /> }
          </div>
        </div>
        <div>
          <Title titleText="Projects" />
          <div className="content-container container" id="project-content">
            <div className="row" style={{ marginTop: "4rem" }}>
              <div className="offset-2" />
              <ProjectButton handleClick={ this.handleClick } btnDesc="Amazon Carry" />
              <ProjectButton handleClick={ this.handleClick } btnDesc="ARM-based Processor" />
              <div className="offset-2" />
            </div>
            <div className="row" style={{ marginBottom: "4rem" }}>
              <div className="offset-2" />
              <ProjectButton handleClick={ this.handleClick } btnDesc="Doctor at Your Fingertip" />
              <ProjectButton handleClick={ this.handleClick } btnDesc="Personal Website" />
              <div className="offset-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ProjectButton extends React.Component {
  render() {
    let btnType = "";
    let marginType = { border: "1px solid #ffffff00" };

    switch (this.props.btnDesc) {
      case "Amazon Carry":
        btnType = "amazon-carry";
        marginType = { borderRight: "1px solid #eeeeee", borderBottom: "1px solid #eeeeee", marginRight: "-1px", marginBottom: "-1px" };
        break;
      case "Doctor at Your Fingertip":
        btnType = "doctor-fingertip";
        break;
      case "ARM-based Processor":
        btnType = "arm-processor";
        break;
      case "Personal Website":
        btnType = "personal-website";
        marginType = { borderLeft: "1px solid #eeeeee", borderTop: "1px solid #eeeeee", marginLeft: "-1px", marginTop: "-1px" };
        break;
      default:

    }
    return (
      <div className="col-4" style={{ padding: 0 }}>
        <div className="btn-container">
          <button 
            className={`btn project-btn ${ btnType } `} 
            onClick={ (e) => this.props.handleClick(e) }
            style={ marginType }
            value={ btnType } >
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
  if (props.project) {
    for (var i = 0; i < exData[props.project].content[props.page].length; i++) {
      projectList.push(<li key={i}> { exData[props.project]["content"][props.page][i] } </li>);
    }
  }
  return (
    <div className="row" style={{ width: "85%", margin: 0, color: "#F5F5DC" }}>
      <div
        className="overlay-content-half col-6">
        <h2 className="overlay-header">
          { props.project ? exData[props.project].header[props.page] : "" }
        </h2>
        <div className="heading-bar" style={{ borderColor: "#F5F5DC", margin: "1rem 0" }} />
        <ul className="overlay-content-text">
          { projectList }
        </ul>
      </div>
      <div
        className="overlay-content-half col-6"
        value="content"
        style={ (props.project && exData[props.project].image[props.page] === "") ? 
          { backgroundColor: "#544475", borderColor: "#544475" } : 
          { backgroundColor: "#604C88", borderColor: "#604C88" }}>
          <img
            src={ props.project ? exData[props.project].image[props.page] : "" }
            alt={ props.project ? exData[props.project].imageAlt[props.page] : "" }
            className="overlay-content-image" />
            <p
              className="overlay-content-text"
              style={{ margin: "1rem auto 0 auto", textAlign: "center" }}> 
              { props.project ? exData[props.project].imageCaption[props.page] : "" } 
            </p>
      </div>
    </div>
  );
}

export default Projects;