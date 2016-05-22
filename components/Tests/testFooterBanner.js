// Filename:	testFooterBanner.js
// Author:		Colin McMillan
// Date:		2016 May
// Description:	Tests the footer components.


import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import LoginFooter from '../FooterBanner';
import loginStore from '../../scripts/stateManagement';

describe('<LoginFooter />', () => {
	
	it ('displays an image when a user is set', () => {
		loginStore.dispatch({
			type: 'SET_USER',
			userImage: foundRecord.userImage,
			userName: foundRecord.userName,
			userEmail: foundRecord.userEmail
		}
		
		const wrapper = shallow(<LoginFooter />);
		expect(wrapper.find('img')).to.have.length(1);
	}
});