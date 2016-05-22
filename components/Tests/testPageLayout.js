// Filename:	testPageLayout.js
// Author:		Colin McMillan
// Date:		2016 May
// Description:	Tests the page layout components.


import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import PageLayout from '../PageLayout';

describe('<PageLayout />', () => {
	
	it('renders children when passed in', () => {
		const wrapper = shallow(
			<PageLayout>
				<div className="unique" />
			</PageLayout>
		);
		expect(wrapper.contains(<div className="unique" />)).to.equal(true);
	});


});