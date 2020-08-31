import React from "react";
import Title from "./Title";
import { exData } from "./ProjectsData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import "./Library.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: false,
      project: "",
      page: 0,
      pageEnd: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
  }

  handleOverlayClick(e) {
    if (e.target.getAttribute("value") === "right-arrow") {
      this.setState({ page: this.state.page + 1 });
    } else if (e.target.getAttribute("value") === "left-arrow") {
      this.setState({ page: this.state.page - 1 });
    } else if (e.target.getAttribute("value") === "container") {
      this.setState({ project: "", overlay: false, page: 0, pageEnd: "" });
      document.body.style = "overflow-y: none;";
      document.title = "EK | Projects";
    }
  }

  handleKeyDown(e) {
    console.log("KeyCode: " + e.keyCode);
    if (this.state.overlay && e.keyCode === 27) {
      this.setState({ overlay: false, page: 0, pageEnd: "", project: "" });
      document.body.style = "overflow-y: none;";
      document.title = "EK | Projects";
    } else if (
      this.state.overlay &&
      e.keyCode === 39 &&
      this.state.pageEnd !== this.state.page
    ) {
      this.setState({ page: this.state.page + 1 });
    } else if (
      this.state.overlay &&
      e.keyCode === 37 &&
      this.state.page !== 0
    ) {
      this.setState({ page: this.state.page - 1 });
    }
  }

  componentDidMount() {
    document.title = "EK | Projects";
  }

  handleClick(e) {
    this.setState({
      overlay: true,
      project: e.currentTarget.value,
      pageEnd: exData[e.currentTarget.value].length - 1,
    });
    document.body.style = "overflow-y: hidden;";
    let projectText;
    switch (e.currentTarget.value) {
      case "amazon-carry":
        projectText = "Amazon Carry";
        break;
      case "arm-processor":
        projectText = "ARM Processor";
        break;
      case "doctor-fingertip":
        projectText = "Doctor at Your Fingertip";
        break;
      case "personal-website":
        projectText = "Personal Website";
        break;
      default:
    }
    document.title = "EK | " + projectText;
  }

  render() {
    return (
      <div
        className="project-container project-btn-container"
        tabIndex="0"
        value="container"
        onKeyDown={(e) => this.handleKeyDown(e)}
      >
        <div
          className="overlay"
          value="container"
          style={
            this.state.project ? { display: "block" } : { display: "none" }
          }
        >
          <div
            className="overlay-content-row"
            value="container"
            onClick={(e) => this.handleOverlayClick(e)}
          >
            {this.state.page !== 0 ? (
              <button
                className="arrow-wrapper flex-center margin-h-center"
                id="left-arrow-wrapper"
                value="left-arrow"
              >
                <div className="arrow" value="left-arrow" />
              </button>
            ) : (
              <div className="arrow-dummy" />
            )}
            <ProjectLayout
              value="content"
              page={this.state.page}
              project={this.state.project}
            />
            {this.state.page !== this.state.pageEnd ? (
              <button
                className="arrow-wrapper flex-center margin-h-center"
                id="right-arrow-wrapper"
                value="right-arrow"
              >
                <div
                  className="arrow margin-h-center"
                  value="right-arrow"
                  style={{ transform: "rotate(225deg)" }}
                />
              </button>
            ) : (
              <div className="arrow-dummy" />
            )}
          </div>
        </div>
        <div>
          <Title titleText="Projects" />
          <div className="content-container container" id="project-content">
            <div className="row" style={{ marginTop: "4rem" }}>
              <div className="offset-2" />
              <ProjectButton
                handleClick={this.handleClick}
                btnDesc="Amazon\nCarry"
              />
              <ProjectButton
                handleClick={this.handleClick}
                btnDesc="ARM-based\nProcessor"
              />
              <div className="offset-2" />
            </div>
            <div className="row" style={{ marginBottom: "4rem" }}>
              <div className="offset-2" />
              <ProjectButton
                handleClick={this.handleClick}
                btnDesc="Doctor at\nYour Fingertip"
              />
              <ProjectButton
                handleClick={this.handleClick}
                btnDesc="Personal\nWebsite"
              />
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
    let newBtnDesc = this.props.btnDesc.split("\\n").map((item, i) => {
      return (
        <p className="project-btn-text" key={i}>
          {item}
          <br />
        </p>
      );
    });

    switch (this.props.btnDesc) {
      case "Amazon\\nCarry":
        btnType = "amazon-carry";
        break;
      case "Doctor at\\nYour Fingertip":
        btnType = "doctor-fingertip";
        break;
      case "ARM-based\\nProcessor":
        btnType = "arm-processor";
        break;
      case "Personal\\nWebsite":
        btnType = "personal-website";
        break;
      default:
    }
    return (
      <div className="col-4" style={{ padding: 0 }}>
        <div className="btn-container">
          <button
            className={`btn ${btnType} project-btn`}
            onClick={(e) => this.props.handleClick(e)}
            value={btnType}
          >
            {newBtnDesc}
          </button>
        </div>
      </div>
    );
  }
}

function ProjectLayout(props) {
  var projectList = [];
  let projectLayoutRender;

  if (
    props.project &&
    exData[props.project][props.page].hasOwnProperty("list")
  ) {
    for (var i = 0; i < exData[props.project][props.page]["list"].length; i++) {
      projectList.push(
        <li key={i}>{exData[props.project][props.page]["list"][i]}</li>
      );
    }
  }

  if (
    props.project &&
    !(
      exData[props.project][props.page].hasOwnProperty("image") ||
      exData[props.project][props.page].hasOwnProperty("video")
    )
  ) {
    projectLayoutRender = (
      <ProjectLayoutNoImg
        project={props.project}
        page={props.page}
        projectList={projectList}
      />
    );
  } else if (
    props.project &&
    (exData[props.project][props.page].hasOwnProperty("image") ||
      exData[props.project][props.page].hasOwnProperty("video"))
  ) {
    projectLayoutRender = (
      <ProjectLayoutImg
        project={props.project}
        page={props.page}
        projectList={projectList}
      />
    );
  } else {
    projectLayoutRender = null;
  }

  return projectLayoutRender;
}

function ProjectLayoutImg(props) {
  return (
    <React.Fragment>
      <div
        className="row"
        style={{ width: "85%", margin: 0, color: "#F5F5DC" }}
      >
        <div className="overlay-content-half col-6">
          <h2 className="overlay-content-header">
            {exData[props.project][props.page].header}
          </h2>
          <div
            className="heading-bar"
            style={{ borderColor: "#F5F5DC", margin: "1rem 0" }}
          />
          {exData[props.project][props.page].hasOwnProperty("subheader") && (
            <p className="overlay-content-subheading">
              {exData[props.project][props.page].subheader}
            </p>
          )}
          {exData[props.project][props.page].hasOwnProperty("list") && (
            <ul className="overlay-content-list"> {props.projectList} </ul>
          )}
          {exData[props.project][props.page].hasOwnProperty("text") && (
            <p className="overlay-content-text">
              {exData[props.project][props.page].text}
            </p>
          )}
        </div>
        <div
          className="overlay-content-half overlay-content-other-half col-6"
          value="content"
        >
          {exData[props.project][props.page].hasOwnProperty("image") && (
            <img
              className="overlay-content-image"
              src={exData[props.project][props.page]["image"].src}
              alt={exData[props.project][props.page]["image"].alt}
              style={
                exData[props.project][props.page]["image"].hasOwnProperty(
                  "border"
                )
                  ? { border: "1px solid #F5F5DC" }
                  : {}
              }
            />
          )}
          {exData[props.project][props.page].hasOwnProperty("video") && (
            <video
              loop
              autoPlay
              className="overlay-content-image"
              src={exData[props.project][props.page]["video"].src}
              alt={exData[props.project][props.page]["video"].alt}
              style={
                exData[props.project][props.page]["video"].hasOwnProperty(
                  "border"
                )
                  ? { border: "1px solid #F5F5DC" }
                  : {}
              }
            />
          )}
          <p className="overlay-content-caption text-align-center">
            {exData[props.project][props.page].hasOwnProperty("image")
              ? exData[props.project][props.page]["image"].caption
              : exData[props.project][props.page]["video"].caption}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

function ProjectLayoutNoImg(props) {
  return (
    <React.Fragment>
      <div
        className="row"
        style={{ width: "85%", margin: 0, color: "#F5F5DC" }}
      >
        <div className="overlay-content-half col">
          <h2 className="overlay-content-header">
            {exData[props.project][props.page].header}
          </h2>
          <div
            className="heading-bar"
            style={{ borderColor: "#F5F5DC", margin: "1rem 0" }}
          />
          {exData[props.project][props.page].hasOwnProperty("subheader") && (
            <p className="overlay-content-subheading">
              {exData[props.project][props.page].subheader}
            </p>
          )}
          {exData[props.project][props.page].hasOwnProperty("list") && (
            <ul className="overlay-content-list"> {props.projectList} </ul>
          )}
          {exData[props.project][props.page].hasOwnProperty("text") && (
            <p className="overlay-content-text">
              {exData[props.project][props.page].text}
            </p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;
