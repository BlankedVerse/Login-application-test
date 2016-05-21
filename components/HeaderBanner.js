// Filename:	HeaderBanner.js
// Description:	Defines React components for displaying Header information
//				on the WSDoH website.

import React from 'react'
import { render } from 'react-dom'



const NavBar = ({userStatus}) => {
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
			(userStatus.userImage !== undefined ? 
				<img src={ userStatus.userImage } /> : )
		</div>
	);
}



const LoginHeader = ({status}) => {
	return (<div>
			{ (status === 'AppSelect') ? 
				<img src='../assets/logobanner.png' /> : '' }
			<img src='../assets/wdohLogo.png' />
		</div>
	);
}

export default NavBar
export default LoginHeader