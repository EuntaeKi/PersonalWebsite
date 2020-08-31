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
  componentDidMount() {
    document.title = "EK | Resume";
  }

  render() {
    return (
      <React.Fragment>
        <Title titleText="Resume" />
        <div className="content-container">
          <ResumeCell heading="Education" parsedItems={ ResJSON.education } itemType="education" />
          <ResumeCell heading="Skills" table={ true } />
          <ResumeCell heading="Projects" parsedItems={ ResJSON.projects } itemType="projects" />
          <ResumeCell heading="Work Experience" parsedItems={ ResJSON.workExperience } itemType="workExperience" />
        </div>
      </React.Fragment>
    );
  }
}

function ResumeCell(props) {
  return (
    <div className="resume-cell-container">
      <div className="row">
        <div className="col-4 resume-cell-header text-align-right">
          <div className="heading-container">
            <h2> { props.heading } </h2>
            <div className="resume-heading-bar" />
          </div>
        </div>
        <div className="col-8 resume-cell-content">
          { props.table ? 
            <ResumeTable /> : 
            Object.keys(props.parsedItems).map((key, index) => {
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

function ResumeTable(props) {
  return (
    <div className="table-container">
      <table className="table">
        <tbody>
          <tr>
            <th>React.js</th>
            <th className="text-align-right" id="tmiddle-left">
              <SkillLevel filled={ 4 } />
            </th>
            <th id="tmiddle-right">PowerShell</th>
            <th className="text-align-right">
              <SkillLevel filled={ 3 } />
            </th>
          </tr>
          <tr>
            <th>HTML5</th>
            <th className="text-align-right" id="tmiddle-left">
              <SkillLevel filled={ 4 } />
            </th>
            <th id="tmiddle-right">Python</th>
            <th className="text-align-right">
              <SkillLevel filled={ 3 } />
            </th>
          </tr>
          <tr>
            <th>CSS3</th>
            <th className="text-align-right" id="tmiddle-left">
              <SkillLevel filled={ 4 } /></th>
            <th id="tmiddle-right">Node.js</th>
            <th className="text-align-right">
              <SkillLevel filled={ 3 } />
            </th>
          </tr>
          <tr>
            <th>Java</th>
            <th className="tright" id="tmiddle-left">
              <SkillLevel filled={ 3 } />
            </th>
            <th id="tmiddle-right">SQL</th>
            <th className="tright">
              <SkillLevel filled={ 3 } />
            </th>
          </tr>
          <tr>
            <th>SystemVerilog</th>
            <th className="tright" id="tmiddle-left">
              <SkillLevel filled={ 3 } />
            </th>
            <th id="tmiddle-right">C/C++</th>
            <th className="tright">
              <SkillLevel filled={ 2 } />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ResumeContent(props) {
  return (
    <React.Fragment>
      <p className="resume-cell-subheader">{ props.subheading }</p>
      <p className="resume-cell-subtext">{ props.subtext }</p>
      <ul className="resume-cell-text-container">
        { Object.keys(props.text).map((key, index) => 
            <li className="resume-cell-text" key={ index }> &#183; { props.JSONRef["text"][key] } </li>
          )
        }
      </ul>
    </React.Fragment>
  )
}

function SkillLevel(props) {
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