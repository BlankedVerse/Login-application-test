// Filename:	main.js
// Author:		Colin McMillan
// Date:		2016 May
// Description:	The mainline for the Login application for the 
//				Washington State Department of Health application page.

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';


import loginStore from './stateManagement.js';

import PageLayout from '../components/PageLayout';
import LoginApp from '../components/LoginApp';
import AppGrid from '../components/AppGrid';

require("../css/main.scss");



// The routing information used to control the page's appearance.
const route = (
	<Router history={hashHistory}>
		<Route path="/" component={PageLayout}>
			<IndexRedirect to="/login" />
			<Route path="login" component={LoginApp} />
			<Route path="apps" component={AppGrid} />
		</Route>
	</Router>
)


// Name:		renderPage
// Description:	Renders and directs the page in response to changes
//				in Redux state.
const renderPage = () => {
	let loginStatus = loginStore.getState().loginState;
	
	if (loginStatus === 'Login') {
		hashHistory.push('/login');
	}
	else if (loginStatus === 'Login2') {
		hashHistory.push('/login');
	}
	else if (loginStatus === 'LoggedIn') {
		hashHistory.push('/apps');
	}
}

loginStore.subscribe(renderPage);

renderPage();

ReactDOM.render(route, document.getElementById('loginApp'));