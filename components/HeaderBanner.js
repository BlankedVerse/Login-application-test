// Filename:	HeaderBanner.js
// Author:		Colin McMillan
// Date:		2016 May
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
			<img className="mainLogo" src='../assets/wdohLogo.png' />
		</div>
	);
}

export default LoginHeader