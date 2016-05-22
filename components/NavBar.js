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
			imageTag = <img className="navBar__avatar" src={ userStatus.userImage } />;
		}
	}
	
	return (<div className="navBar">
			
			<a href='#'>
				<img className='navBar__icon' src='../assets/help.png' />
			</a>
			<a href='#'>
				<img className='navBar__icon' src='../assets/notifications.png' />
			</a>
			<a href='#'>
				<img className='navBar__icon' src='../assets/apps.png' />
			</a>
			{ imageTag }
		</div>
	);
}

export default NavBar