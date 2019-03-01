export const ADD_PERSON = 'ADD_PERSON';
export const addPerson = (name, age) => {
  return {
    type: ADD_PERSON,
    name: name,
    age: age
  }
}

export const REMOVE_PERSON = 'REMOVE_PERSON';
export const removePerson = (id) => {
  return {
    type: REMOVE_PERSON,
    personId: id
  }
}