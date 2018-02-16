import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Thank extends Component {
  constructor(props) {
    super(props)
    this.state = {
      order_again: false
    }
  }

  handleSubmit = () => {
    this.setState(() => ({
      order_again: true
    }))
	}
	
	render() {
    if(this.props.user && this.props.user.name) {
      if (this.state.order_again === true) {
        return <Redirect to="/order" />
      }
			return (
				<div>
					<form onSubmit={this.handleSubmit}>
						<input type="text" />
						<input type="submit" value="Clown Around Again!" />
					</form>
				</div>
			);
		}
    else {
      return (<Redirect to="/" />);
    }
	}
}

export default Thank;