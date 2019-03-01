import * as actionTypes from './actions';

const initialState = {
	persons: []
};

// In AddPerson.js we used local state and we send that to reducer using this.props.personAdded() method
// that we received like prop from Person.js in this.props.onAddedPerson. Here we reveived like prop
// from mapDispatchToProps(), where we dispatch the action addPerson().
// In its body this action receives like payloads name and age, from the arguments name and age
// and goes to reducer. 
// Here we take name and age from action and in this way the store, state is updated

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_PERSON:
			const newPerson = {
				id: Math.random(), // not really unique but good enough here!
				name: action.name,
				age: action.age
			}
			return {
				...state,
				persons: state.persons.concat(newPerson)
			}
		case actionTypes.REMOVE_PERSON:
			return {
				...state,
				persons: state.persons.filter(person => person.id !== action.personId)
			}
	}
	return state;
};

export default reducer;