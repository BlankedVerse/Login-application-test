// Filename:	testAppGrid.js
// Author:		Colin McMillan
// Date:		2016 May
// Description:	Tests the app grid components.


import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import AppButton from '../AppGrid';
import AppGrid from '../AppGrid';

// Unit tests for the AppButton component.
describe('<AppButton />', () => {
	
	it ('displays an image', () => {
		const wrapper =
			shallow(<AppButton 
				appImage='../../assets/smart.png'
				appLink='#' />);
		expect(wrapper.find('img')).to.have.length(1);
	}

	it ('contains a link', () => {
		const wrapper =
			shallow(<AppButton
				appImage='../../assets/smart.png'
				appLink='#' />);
		expect(wrapper.find('a')).to.have.length(1);
	}
});


// Unit tests for the AppGrid component.
describe('<AppGrid />', () => {
	
	it ('renders nine AppButtons', () => {
		const wrapper = shallow(<AppGrid />);
		expect(wrapper.find(AppButton)).to.have.length(9);
	}
}