// Filename:	FooterBanner.js
// Description:	Defines React components for displaying footer information
//				on the WSDoH website.

import React from 'react'
import { render } from 'react-dom'



const LoginFooter = ({status}) => {
	console.log (status);
	return (<div>
			{ (status === 'Login2') ? 
				<img src='../assets/logobanner.png' /> : '' }
			<p>&#169; Scientific Technologies Corporation 2016</p>
		</div>
	);
}

export default LoginFooter