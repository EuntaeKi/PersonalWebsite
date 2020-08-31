import React from 'react';
import Title from './Title';
import Profile from '../img/profile.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import './Library.css';

class About extends React.Component {
  componentDidMount() {
    document.title = "EK | About";
  }

  render() {
    return (
      <React.Fragment>
        <Title titleText="About Me" />
        <div className="content-container">
          <div className="row">
              <div className="col-4 about-left flex-center">
                <img src={ Profile } alt="Profile" className="about-profile-photo" />
              </div>
              <div className="offset-1 col-7">
                <h2> I am </h2>
                <div className="heading-bar" />
                <ul className="about-text">
                  <li> A&nbsp;&nbsp;recent graduate of University of Washington with an <span className="emphasis">EE</span> degree </li>
                  <li> A&nbsp;&nbsp;fan of <span className="emphasis">Jazz</span> &amp; <span className="emphasis">Korean Hip-Hop</span> </li>
                  <li> A&nbsp;&nbsp;former <span className="emphasis">boba</span> barista and current <span className="emphasis">boba</span> enthusiast </li>
                  <li> A&nbsp;&nbsp;former <span className="emphasis">Nordstrom sales associate</span> at the flagship store</li> 
                  <li> A&nbsp;&nbsp;mattress winner for selling the <span className="emphasis">most</span> mattresses within the team</li>
                  <li> A&nbsp;&nbsp;future web <span className="emphasis">developer</span> &amp; <span className="emphasis">corgi</span> owner </li>
                </ul>
              </div>
          </div>
          <hr style={{ width: "25%", backgroundColor: "#eeeeee", height: "0.25rem", border:"none", margin: "3rem auto 0 auto" }} />
          <div>
            <div className="about-others text-align-center">
              <p className="margin-h-center"> "A hardworking, <span className="emphasis">curious</span> person who wants to <span className="emphasis">learn</span> more about <span className="emphasis">technology</span>." </p>
              <p className="margin-h-center">Brandon Chong, Project Partner &amp; Front End Developer @ Neeva </p>
            </div>
            <div className="about-others text-align-center">
              <p className="margin-h-center"> "Hearthstone <span className="emphasis">Legend</span>" </p>
              <p className="margin-h-center"> Hidetaka Yoshino, former College Roommate </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
