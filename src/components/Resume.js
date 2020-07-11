import React from 'react';
import Title from './Title';
import ResJSON from './resume.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resume.css';
import './Library.css';

class Resume extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Title titleText="Resume" />
        <div className="content-container">
          <ResumeCell heading="Education" parsedItems={ ResJSON.education } itemType="education" />
          <ResumeCell heading="Projects" parsedItems={ ResJSON.projects } itemType="projects" />
          <ResumeCell heading="Work Experience" parsedItems={ ResJSON.workExperience } itemType="workExperience" />
        </div>
      </React.Fragment>
    );
  }
}
function ResumeCell(props){
  return (
      <div className="resume-cell-container">
        <div className="row">
          <div className="col-4 resume-cell-header">
            <h2> { props.heading } </h2>
            <div className="heading-container">
              <div className="resume-heading-bar" />
            </div>
          </div>
          <div className="col-8 resume-cell-content">
            { Object.keys(props.parsedItems).map((key, index) => {
                let tempJSONLoc = ResJSON[props.itemType][key];
                return <ResumeContent 
                  key={ index }
                  subheading={ tempJSONLoc.subheading }
                  subtext={ tempJSONLoc.subtext } 
                  text={ tempJSONLoc.text }
                  JSONRef={ tempJSONLoc }
                />
              })
            }
          </div>
        </div>
      </div>
    );
  }

function ResumeContent(props){
  return (
    <React.Fragment>
      <p className="resume-cell-subheader">{ props.subheading }</p>
      <p className="resume-cell-subtext">{ props.subtext }</p>
      <div className="resume-cell-text-container">
        { Object.keys(props.text).map((key, index) => 
            <li className="resume-cell-text" key={ index }> &#183; { props.JSONRef["text"][key] } </li>
          )
        }
      </div>
    </React.Fragment>
  )
}

export default Resume;
