// Filename:	FooterBanner.js
// Description:	Defines React components for displaying footer information
//				on the WSDoH website.

import React from 'react'
import { render } from 'react-dom'

import loginStore from '../scripts/stateManagement';


// Name:		LoginFooter
// Description:	A component that displays a footer on the page, including
//				copyright information and the app logo banner on the second
//				step of the login process.
const LoginFooter = () => {
	let status = loginStore.getState();
	
	return (<div className="footer">
			{ (status.loginState === 'Login2') ? 
				<img className="footer__appStrip" src='../assets/logobanner.png' /> : '' }
			<p className="footer__copyright">&#169; Scientific Technologies Corporation 2016</p>
		</div>
	);
}

export default LoginFooter