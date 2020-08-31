import React from 'react';
import Title from './Title';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
  componentDidMount() {
    document.title = "EK | Euntae Ki";
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Title titleText="Hello World!" home={ true } center={ true } />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
