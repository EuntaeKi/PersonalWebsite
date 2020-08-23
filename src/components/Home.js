import React from 'react';
import Title from './Title';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

class Home extends React.Component {
  componentDidMount() {
    document.title = "EK | Euntae Ki";
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ justifyContent: "center", display: "flex", alignItems:"center", height: "80%", textShadow: "2px 4px #838383" }}>
          <Title titleText="Hello World!" center={ true } />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
