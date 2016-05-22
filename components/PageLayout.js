// Filename:	PageLayout.js
// Description:	Defines React components for displaying the main page
//				of the application.

import React from 'react'
import { render } from 'react-dom'


import LoginHeader from './HeaderBanner';
import LoginFooter from './FooterBanner';


// Name:		PageLayout
// Description:	A component that displays the header, main frame, and
//				footer for the login page.
class PageLayout extends React.Component {
	render() {
		return (<div>
				<LoginHeader />
				{this.props.children}
				<LoginFooter />
			</div>
		);
	}
}

export default PageLayout