// Filename:	LoginApp.js
// Description:	Defines React components used for logging in to the Washington
//				State Department of Health website.

import React from 'react'
import ReactDOM from 'react'
import { render } from 'react-dom'


import Validation from '../scripts/validation';
import loginStore from '../scripts/stateManagement';



// Name:		CheckEmail
// Description:	An event handler that checks the email address as it is
//				being typed in. If it matches one on record, the state of
//				the page is adjusted with the retrieved information.
const CheckEmail = () => {
	let enteredEmail = document.getElementById('inputEmail').value;
	let foundRecord = Validation.prototype.findRecord(enteredEmail);
	
	
	if (foundRecord) {
		loginStore.dispatch({
			type: 'SET_USER',
			userImage: foundRecord.userImage,
			userName: foundRecord.userName,
			userEmail: foundRecord.userEmail
		});
	}
}



// Name:		CheckPassword
// Description:	An event handler that checks the password the user
//				has entered. If it matches with the credentials on
//				record, they are logged in.
const CheckPassword = () => {
	let enteredPass = document.getElementById("inputPassword").value;
	let userEmail = loginStore.getState().userEmail;

	
	if (userEmail !== undefined) {
		if (Validation.prototype.checkPassword(userEmail, enteredPass)) {
			console.log("Logging in");
			loginStore.dispatch({
				type: 'LOG_IN'
			});
		}
		else {
			//TODO: Shake password field on failure.
		}
	}
}



// Name:		EmailEntry
// Description: A component that allows the user to type in their email 
//				address. Is replaced with userInfo() when a valid email 
//				has been entered.
const EmailEntry = () => {
	return (<div>
			<input type="email" id="inputEmail" class="form-control signinForm__field" 
				placeholder="EMAIL" required autofocus />
		</div>
	);
}



// Name:		userInfo
// Description:	A component that displays the user's name, email address, and
//				picture. Replaces emailEntry() once a valid email has been
//				entered.
// Parameter:	The user's status, containing userImage, userName, and
//				userEmail values.
const UserInfo = () => {
	let userStatus = loginStore.getState()
	
	return (<div>
			<img class="signinForm__portrait" src={ userStatus.userImage } />
			<h2 class="signinForm__nameLabel">{ userStatus.userName }</h2>
			<h3 class="signinForm__emailLabel">{ userStatus.userEmail }</h3>
		</div>
	);
}



// Name:		passwordEntry()
// Description:	A component that allows the user to enter their password.
const PasswordEntry = () => {
	return (<div>
			<input type="password" id="inputPassword" 
				class="form-control signinForm__field" 
				placeholder="PASSWORD" required />
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
		let userStatus = loginStore.getState();
		
		return (<form class="form-signin signinForm">
				{ (userStatus.loginState === 'Login') ? <EmailEntry /> :
					<UserInfo /> }
				<PasswordEntry />
				<button class="btn btn-lg btn-primary btn-block signinForm__button"
					id='submitLogin' type="submit">
					{ (userStatus.loginState === 'Login') ? 'SIGN IN' : 'NEXT' }
				</button>
				<a class="signinForm__help">Need help?</a>
			</form>
		);
	}
	
	
	componentDidMount() {
		if (loginStore.getState().loginState === 'Login') {
			document.getElementById('inputEmail').addEventListener("keyup", 
				CheckEmail);
		}
		document.getElementById('submitLogin').addEventListener("click", 
			CheckPassword);
	}
}


export default LoginApp