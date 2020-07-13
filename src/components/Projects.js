import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import './Library.css';

import Title from './Title';

class Projects extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Title titleText="Projects" />
        <div className="content-container">

        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
