import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { addPerson, removePerson } from '../store/actions';

class Persons extends Component {

	render() {
		return (
			<div>
				<AddPerson personAdded={this.props.onAddedPerson} />
				{this.props.prs.map(person => (
					<Person
						key={person.id}
						name={person.name}
						age={person.age}
						clicked={() => this.props.onRemovedPerson(person.id)} />
				))}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		prs: state.persons
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAddedPerson: (name, age) => dispatch(addPerson(name, age)),
		onRemovedPerson: (id) => dispatch(removePerson(id))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);