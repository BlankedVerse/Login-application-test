// Filename:	stateManagement.js
// Description:	Provides state management for the login page application using
//				Redux.

import Redux from 'redux'


// Name:		login
// Description: Takes the current state and an action and
//				returns the new state created by that action.
//				The reducer function for the LoginApp.
const login = (state = 0, action) => {
	let newState = {};
	
	
	switch (action.type) {
		case 'SET_USER':
			newState = Object.assign({}, state, {
				loginState: 'Login2',
				userImage: action.userImage,
				userName: action.userName,
				userEmail: action.userEmail
			});
			break;
		case 'LOG_IN':
			newState = Object.assign({}, state, {
				loginState : 'LoggedIn'
			});
			break;
		default:
			newState = Object.assign({}, state);
	}
	
	return newState;
}


// A method for creating a Redux store from a reduction method.
import { createStore } from 'redux';
// A Redux data store for the Login application.
const loginStore = createStore(login, { loginState: 'Login' });


export default loginStore