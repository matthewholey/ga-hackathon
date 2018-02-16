import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: ''
    }
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }
  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
  }
  handlePhoneChange = (e) => {
    this.setState({phone: e.target.value})
  }
  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/auth/signup', {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password
    }).then(result => {
      localStorage.setItem('mernToken', result.data.token);
      this.props.updateUser();
    }).catch(error => {
      console.log(error.response);
      this.props.setFlash('error', error.response.status + ': ' + (error.response.data && error.response.data.error ? error.response.data.message : error.response.statusText));
    })
  }

  render() {
    let form = '';
    if(this.props.user){
      return (<Redirect to="/order" />);
    }
    else {
      form = (
        <form onSubmit={this.handleSubmit}>
          <div>
            <input name="Name"
                  placeholder="First Last"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange} />
          </div>
          <div>
            <input name="Email"
                  placeholder="email@example.com"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange} />
          </div>
          <div>
            <input name="Phone"
                  placeholder="123-456-7890"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  value={this.state.phone}
                  onChange={this.handlePhoneChange} />
          </div>
          <div>
            <input name="Password"
                  placeholder="Choose a password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange} />
            </div>
            <input type="submit" value="Sign up!" className="btn-primary" />
        </form>);
    }
    return (
      <div>
        {form}
        {this.props.user ? <Redirect to="/profile" /> : ''}
      </div>
    );
  }
}

export default Signup;
