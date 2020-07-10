import React from 'react';
import Title from './Title';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resume.css';
import './Library.css';

class Resume extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Title titleText="Resume" />
      <div className="content-container">
        <ResumeCell heading="Education" subheading="University of Washington" subtext="Seattle, WA | Sept 2016 - Jun 2020" text={`B.S. Electrical and Computer Engineering, Embedded Systems
          Major GPA : 3.79/4.00`} />
      </div>
      </React.Fragment>
    );
  }
}

function ResumeCell(props) {
  return (
    <div className="resume-cell-container">
      <div className="row">
        <div className="col-3 resume-cell-header">
          <h2>{ props.heading }</h2>
        </div>
        <div className="col-9 resume-cell-content">
          <p className="resume-cell-subheader">{ props.subheading }</p>
          <p className="resume-cell-subtext">{ props.subtext }</p>
          <p className="resume-cell-text"> { props.text } </p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
