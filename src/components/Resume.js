import React from 'react';
import Title from './Title';
import ResJSON from './resume.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRStar } from "@fortawesome/free-regular-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resume.css';
import './Library.css';



class Resume extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Title titleText="Resume" />
        <div className="content-container container">
          <ResumeCell heading="Education" parsedItems={ ResJSON.education } itemType="education" />
          <div className="resume-cell-container">
            <div className="row">
              <div className="col-4 resume-cell-header">
                <h2> Skills </h2>
                <div className="heading-container">
                  <div className="resume-heading-bar" />
                </div>
              </div>
              <div className="col-8 resume-cell-content">
                <div className="table-container">
                  <table className="table" style={{ textAlign: "left", margin: "0 auto 0 0" }}>
                    <tbody>
                      <tr>
                        <th>Javascript</th>
                        <th className="tright" id="tmiddle">
                          <SkillLevel filled={ 4 } />
                        </th>
                        <th>PowerShell</th>
                        <th className="tright">
                          <SkillLevel filled={ 3 } />
                        </th>
                      </tr>
                      <tr>
                        <th>HTML5</th>
                        <th className="tright" id="tmiddle">
                          <SkillLevel filled={ 4 } />
                        </th>
                        <th>Python</th>
                        <th className="tright">
                          <SkillLevel filled={ 3 } />
                        </th>
                      </tr>
                      <tr>
                        <th>CSS3</th>
                        <th className="tright" id="tmiddle">
                          <SkillLevel filled={ 4 } /></th>
                        <th>SQL</th>
                        <th className="tright">
                          <SkillLevel filled={ 3 } />
                        </th>
                      </tr>
                      <tr>
                        <th>Java</th>
                        <th className="tright" id="tmiddle">
                          <SkillLevel filled={ 3 } />
                        </th>
                        <th>C/C++</th>
                        <th className="tright">
                          <SkillLevel filled={ 2 } />
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
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

function SkillLevel(props){
  var filledStars = [];
  for (var i = 0; i < props.filled; i++) {
    filledStars.push(<FontAwesomeIcon icon={ faStar } size="1x" transform="shrink-4" key={i} />);
  }
  for (var j = 0; j < 5 - props.filled; j++) {
    filledStars.push(<FontAwesomeIcon icon={ faRStar } size="1x" transform="shrink-4" key={5+j} />);
  }
  return (
    <React.Fragment>
      { filledStars }
    </React.Fragment>
  );
}

export default Resume;
