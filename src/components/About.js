import React from 'react';
import Title from './Title';
import Profile from '../img/profile.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import './Library.css';

function About(props) {
  return (
    <React.Fragment>
      <Title titleText="About Me" />
      <div className="content-container">
        <div className="row">
            <div className="col-2" style={{ paddingTop: "1rem" }}>
              <img src={ Profile } alt="Profile" />
            </div>
            <div className="offset-2 col-8">
              <h2> I am </h2>
              <div className="heading-bar" />
              <ul>
                <li className="about-text"> A recent graduate of University of Washington with an <span className="emphasis">EE</span> degree </li>
                <li className="about-text"> A fan of <span className="emphasis">Jazz</span> &amp; <span className="emphasis">Korean Hip-Hop</span> </li>
                <li className="about-text"> A former <span className="emphasis">boba</span> barista and current <span className="emphasis">boba</span> enthusiast </li>
                <li className="about-text"> A future web <span className="emphasis">developer</span> &amp; <span className="emphasis">corgi</span> owner </li>
              </ul>
            </div>
        </div>
        <hr style={{ width: "25%", backgroundColor: "#eeeeee", height: "0.25rem", border:"none", margin: "3rem auto 3rem auto" }} />
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "4rem 0" }}>
          <p className="about-others-text"> "A hardworking, <span className="emphasis">curious</span> person who wants to <span className="emphasis">learn</span> more about <span className="emphasis">technology</span>." </p>
          <p style={{ textAlign: "center" }}>Brandon Chong, Project Partner &amp; Front End Developer @ Neeva </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", marginBottom: "2rem" }}>
          <p style={{ margin: "0 auto" }}> "Hearthstone <span className="emphasis">Legend</span>" </p>
          <p className="about-others-text" style={{ margin: "0 auto" }}> Hidetaka Yoshino, former College Roommate </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
