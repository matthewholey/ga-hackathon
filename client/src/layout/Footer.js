import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
        <div className="footer">
            <span className="footer-text">Created by GA Hackathon Team 1 &copy; {new Date().getFullYear()}</span>
        </div>
      );
  }
}

export default Footer;
