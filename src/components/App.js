import React, {PropTypes} from 'react';
import NavBar from './NavBar';

class App extends React.Component {
  render() {
    return(
      <div>
        <NavBar/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
