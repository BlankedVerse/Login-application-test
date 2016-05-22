// Filename:	NavBar.js
// Description:	Defines React components for displaying the navigation bar
//				on the WSDoH website.

import React from 'react'
import { render } from 'react-dom'

import loginStore from '../scripts/stateManagement';


// Name:		NavBar
// Description:	A component that displays the image of the currently logged
//				in user and a series of menu options.
const NavBar = () => {
	let imageTag = '';
	let userStatus = loginStore.getState();
	
	if (userStatus !== undefined) {

		if (userStatus.userImage !== undefined) {
			imageTag = <img class="navBar__avatar" src={ userStatus.userImage } />;
		}
	}
	
	return (<div class="navBar">
			<button class="navBar__icon">
				<img src='../assets/help.png' />
			</button>
			<button class="navBar__icon">
				<img src='../assets/notifications.png' />
			</button>
			<button class="navBar__icon">
				<img src='../assets/apps.png' />
			</button>
			{ imageTag }
		</div>
	);
}

export default NavBar