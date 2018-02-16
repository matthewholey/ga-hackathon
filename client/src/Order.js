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
          <div className="form-group">
            <input type="text" placeholder="Where is this Clown-O-Gram going?" className="form-control" />
          </div>
          <div className="form-group">
            <input type="date" placeholder="When should the Clown arrive?" className="form-control" />
          </div>
          <h2>Scary Clown</h2>
          <label htmlFor="clown1">
            <input type="radio" id="clown1"/>
            <img src="./media/scary.jpg" alt="Scary Clown"/>
          </label>
          <h2>Mime</h2>
          <label htmlFor="clown2">
            <input type="radio" id="clown2"/>
            <img src="./media/mime.jpg" alt="Mime"/>
          </label>
          <h2>Terry</h2>
          <label htmlFor="clown3">
            <input type="radio" id="clown3"/>
            <img src="./media/terry.jpg" alt="Terry"/>
          </label>
            <input type="submit" value="Proceed to Payment" className="btn btn-primary" />
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
