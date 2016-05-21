// Filename:	stateManagement.js
// Description:	Provides state management for the login page application using
//				Redux.

import Redux from 'redux'


// Name:		login
// Description: Takes the current state and an action and
//				returns the new state created by that action.
const login = (state = 0, action) => {
	// TODO: Implement state management.
	return (Object.assign({}, state,
			reassigned: true
		)
	);
}


// A method for creating a Redux store from a reduction method.
const { createStore } = Redux;
// A Redux data store for the Login application.
const store = createStore(login);



const render = () => {
	
}

store.subscribe(render);