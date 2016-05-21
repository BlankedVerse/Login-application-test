// Filename:	NavBar.js
// Description:	Defines React components for displaying the navigation bar
//				on the WSDoH website.

import React from 'react'
import { render } from 'react-dom'


// Name:		NavBar
// Description:	A component that displays the image of the currently logged
//				in user and a series of menu options.
const NavBar = ({userStatus}) => {
	let imageTag = '';
	
	if (userStatus !== undefined) {
		if (userStatus.userImage !== undefined) {
			imageTag = '<img src={ userStatus.userImage } />';
		}
	}
	
	return (<div>
			<button>
				<img src='../assets/help.png' />
			</button>
			<button>
				<img src='../assets/notifications.png' />
			</button>
			<button>
				<img src='../assets/apps.png' />
			</button>
			{ imageTag }
		</div>
	);
}

export default NavBar