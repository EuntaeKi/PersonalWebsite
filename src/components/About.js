import React from 'react';
import Title from './Title';
import Profile from '../img/profile.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Library.css';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Title titleText="About Me" />
      <div className="content-container">
        <div className="row">
            <div className="col-3 about-photo-box">
              <img src={ Profile } alt="Profile" />
            </div>
            <div className="offset-2 col-7 about-content">
              <div className="about-text"> I am </div>
              <div className="heading-bar" />
            </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default About;
