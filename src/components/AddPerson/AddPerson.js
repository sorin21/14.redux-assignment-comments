import React, { Component } from 'react';
import './AddPerson.css';

class AddPerson extends Component {
	state = {
		name: '',
		age: ''
	}

	onChangeName = (event) => {
		this.setState({ name: event.target.value })
	}

	onChangeAge = (event) => {
		this.setState({ age: event.target.value })
	}
	render() {
		return (
			<div className="AddPerson">
				<input type="text" onChange={this.onChangeName} value={this.state.name} />
				<input type="number" onChange={this.onChangeAge} value={this.state.age} />
				<button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
			</div>
		);
	}
}

export default AddPerson;