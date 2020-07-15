import React from 'react';
import '../img/Amazon_Carry_Background.jpg';
import './Projects.css';
import './Library.css';

import Title from './Title';

class Projects extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Title titleText="Projects" />
        <div className="content-container container" id="project-container">
          <div className="row">
            <ProjectButton btnDesc="Amazon Carry" edgeCheck={ false } />
            <ProjectButton btnDesc="ARM-based Processor" edgeCheck={ false } />
            <ProjectButton btnDesc="Doctor at Your Fingertip" edgeCheck={ true } />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function ProjectButton(props) {
  let btnType;
  
  if (props.btnDesc === "Amazon Carry") {
    btnType = "amazon-carry"
  }

  return (
    <React.Fragment>
        <button className={`btn col-4 project-btn ${ btnType } `} style={ props.edgeCheck ? { } : { borderRight: "1px solid #ffffff" }}>
          <p className="project-btn-text">{ props.btnDesc }</p>
        </button>
    </React.Fragment>
  );
}

export default Projects;
