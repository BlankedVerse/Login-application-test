// Filename:	testHeaderBanner.js
// Author:		Colin McMillan
// Date:		2016 May
// Description:	Tests the header components.


import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import LoginHeader from '../HeaderBanner';
import NavBar from '../NavBar';
import loginStore from '../../scripts/stateManagement';

describe('<LoginHeader />', () => {
	
	it ('does not display a Navbar before logging in', () => {
		const wrapper = shallow(<LoginHeader />);
		expect(wrapper.find(NavBar)).to.have.length(0);
	}
	
	it ('displays a Navbar when logged in', () => {
		loginStore.dispatch({
			type: 'LOG_IN',
		}
		
		const wrapper = shallow(<LoginHeader />);
		expect(wrapper.find(NavBar)).to.have.length(1);
	}
});