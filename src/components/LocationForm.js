import React from 'react';

export default class LocationForm extends React.Component{
	render(){
		return(
			<div>
				<h3>Change Location</h3>
				<form onSubmit= { this.changeLocation.bind(this) }>
					<input type='text' ref='city' placeholder='Enter city' />
					<br />
					<input type='text' ref='state' placeholder='Enter state' />
					<br />
					<input type='submit' value="Submit" />

				</form>
			</div>
		)
	}

	changeLocation(e) {
		e.preventDefault();
		let location = {
			city: this.refs.city.value,
			state: this.refs.state.value
		}
		this.props.onLocationChange(location);
		return false;
	}
}