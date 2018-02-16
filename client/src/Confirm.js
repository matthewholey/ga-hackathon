import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Confirm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmed: false
    }
  }

  handleSubmit = () => {
    this.setState(() => ({
      confirmed: true
    }))
	}
	
	render() {
    if(this.props.user && this.props.user.name) {
      if (this.state.confirmed === true) {
        return <Redirect to="/order" />
      }
			return (
				<div>
					<form onSubmit={this.handleSubmit}>
						<input type="text" />
						<input type="submit" value="Confirm" />
					</form>
				</div>
			);
		}
    else {
      return (<Redirect to="/" />);
    }
	}
}

export default Confirm;