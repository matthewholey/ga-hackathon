import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Pay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toConfirm: false
    }
  }

  handleSubmit = () => {
    this.setState(() => ({
      toConfirm: true
    }))
	}
	
	render() {
    if(this.props.user && this.props.user.name) {
      if (this.state.toConfirm === true) {
        return <Redirect to="/confirm" />
      }
			return (
				<div>
					<form onSubmit={this.handleSubmit}>
						<input type="text" />
						<input type="submit" value="Proceed to Confirmation" />
					</form>
				</div>
			);
		}
    else {
      return (<Redirect to="/" />);
    }
	}
}

export default Pay;