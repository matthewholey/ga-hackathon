import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class Home extends Component {
  render(){
    if (this.props.user) {
        return (<Redirect to="/order" />);
    }
    else {
      return (
        <div>
          <p>Send your friends a clown!</p>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
  }
}

export default Home;
