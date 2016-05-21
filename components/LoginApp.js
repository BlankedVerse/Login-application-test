// Filename:	LoginApp.js
// Description:	Defines React components used for logging in to the Washington
//				State Department of Health website.

import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Router, Route, Link, withRouter } from 'react-router'
// TODO: Import css

import LoginFooter from './FooterBanner';
import LoginHeader from './HeaderBanner';
import NavBar from './NavBar';
import AppGrid from './AppGrid';


// How many columns should be used for the app selection screen.
const numberOfColumns = 3;


// Name:		emailEntry
// Description: A component that allows the user to type in their email address.
//				Is replaced with userInfo() when a valid email has been entered.
const EmailEntry = () => {
	return (<div>
			<input type="email" id="inputEmail" class="form-control" placeholder="EMAIL" required autofocus />
		</div>
	);
}



// Name:		userInfo
// Description:	A component that displays the user's name, email address, and
//				picture. Replaces emailEntry() once a valid email has been entered.
// Parameter:	The user's status, containing userImage, userName, and userEmail
//				values.
const UserInfo = (userStatus) => {
	return (<div>
			<img src={ userStatus.userImage } />
			<h2>{ userStatus.userName }</h2>
			<h3>{ userStatus.userEmail }</h3>
		</div>
	);
}



// Name:		passwordEntry()
// Description:	A component that allows the user to enter their password.
const PasswordEntry = () => {
	return (<div>
			<input type="password" id="inputPassword" class="form-control" placeholder="PASSWORD" required />
		</div>
	);
}



// Name:		LoginApp
// Description:	A component that allows the user to enter their email
//				and password to log in to the Washington State Department
//				of Health App selector. Once a user has typed in their email,
//				if they are found in the system their name, email, and picture
//				are displayed.
class LoginApp extends React.Component {
	// Name:		Render
	// Description:	Renders the login controls for the page.
	render() {
		var state = {
			loginState: 'Login'
		}
		
		// Only display the email entry on the first login page, not the second.
		return (<div class="container" >
				<LoginHeader status={ state.loginState } />
				{ (state.loginState === 'AppSelect') ? <NavBar /> : '' }
				<form class="form-signin">
					<h2 class="form-signin-heading">Please sign in</h2>
					{ (state.loginState === 'Login') ? <EmailEntry /> : UserInfo(state) }
					<PasswordEntry />
					<button class="btn btn-lg btn-primary btn-block" type="submit">SIGN IN</button>
				</form>
				<AppGrid columns={ numberOfColumns } />
				<LoginFooter status={ state.loginState } />
			</div>
		);
	}
}

export default LoginApp