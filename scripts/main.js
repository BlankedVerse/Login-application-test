// Filename:	main.js
// Description:	The mainline for the Login application for the 
//				Washington State Department of Health application page.

import React from 'react';
import ReactDOM from 'react-dom';

import LoginApp from '../components/LoginApp';

ReactDOM.render(<LoginApp />, document.getElementById('loginApp'));