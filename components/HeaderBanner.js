// Filename:	HeaderBanner.js
// Description:	Defines React components for displaying Header information
//				on the WSDoH website.

import React from 'react'
import { render } from 'react-dom'

import NavBar from './NavBar';
import loginStore from '../scripts/stateManagement';


// Name:		LoginHeader
// Description:	A component that displays the WSDoH company logo.
const LoginHeader = () => {
	let status = loginStore.getState();
	
	return (<div>
			{ (status.loginState === 'LoggedIn') ? <NavBar /> : '' }
			<img class="mainLogo" src='../assets/wdohLogo.png' />
		</div>
	);
}

export default LoginHeader