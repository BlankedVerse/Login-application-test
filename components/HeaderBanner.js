// Filename:	HeaderBanner.js
// Description:	Defines React components for displaying Header information
//				on the WSDoH website.

import React from 'react'
import { render } from 'react-dom'


// Name:		LoginHeader
// Description:	A component that displays the WSDoH company logo.
const LoginHeader = ({status}) => {
	return (<div>
			<img src='../assets/wdohLogo.png' />
		</div>
	);
}

export default LoginHeader