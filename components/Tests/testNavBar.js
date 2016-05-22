// Filename:	testNavBar.js
// Author:		Colin McMillan
// Date:		2016 May
// Description:	Tests the Nav Bar components.


import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import NavBar from '../NavBar';

describe('<NavBar />', () => {

	it ('contains three links', () => {
		const wrapper =
			shallow(<NavBar />);
		expect(wrapper.find('a')).to.have.length(3);
	}
});