import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Order extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toPay: false
    }
  }

  handleSubmit = () => {
    this.setState(() => ({
      toPay: true
    }))
  }

  render() {
    if(this.props.user && this.props.user.name) {
      if (this.state.toPay === true) {
        return <Redirect to="/pay" />
      }
      return (
        <div>
          <h2>HEY {this.props.user.name}!</h2>
          <h4>It's time to clown a friend!</h4>
          <form onSubmit={this.handleSubmit}>
            <input type="text" />
            <input type="submit" value="Proceed to Payment" />
          </form>
        </div>
      );
    }
    else {
      return (<Redirect to="/" />);
    }
  }
}

export default Order;
