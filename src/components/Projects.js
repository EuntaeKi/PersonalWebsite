import React from 'react';
import './Projects.css';
import './Library.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Title from './Title';

class Projects extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Title titleText="Projects" />
        <div className="content-container container" id="project-container">
          <div className="row">
            <ProjectButton className="col-4" btnDesc="Amazon Carry" edgeCheck={ false } />
            <ProjectButton className="col-4" btnDesc="ARM-based Processor" edgeCheck={ false } />
            <ProjectButton className="col-4" btnDesc="Doctor at Your Fingertip" edgeCheck={ true } />
          </div>
        </div>
      </React.Fragment>
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
          <button className={`btn project-btn ${ this.state.btnType } `} style={ this.props.edgeCheck ? { } : { borderRight: "1px solid #ffffff" }}>
            <p className="project-btn-text">{ this.props.btnDesc }</p>
          </button>
        </div>
      </div>
    );
  }
}

export default Projects;
