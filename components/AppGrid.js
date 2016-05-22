// Filename:	AppGrid.js
// Author:		Colin McMillan
// Date:		2016 May
// Description:	A component that arranges links as a series of
//				image buttons arranged in a grid. 

import React from 'react'
import { render } from 'react-dom'


// The default number of columns to sort the grid by.
const columnCount = 3;


// A list of applications used in the component.
const appList = [{
		name: 'Interop',
		image: '../assets/interop.png',
		link: '#/apps'
	},
	{
		name: 'PHC Hub',
		image: '../assets/phchub.png',
		link: '#/apps'
	},
	{
		name: 'ImmuCast',
		image: '../assets/immucast.png',
		link: '#/apps'
	},
	{
		name: 'SENTINEL',
		image: '../assets/sentinel.png',
		link: '#/apps'
	},
	{
		name: 'SMaRT',
		image: '../assets/smart.png',
		link: '#/apps'
	},
	{
		name: 'ImmsLink',
		image: '../assets/immslink.png',
		link: '#/apps'
	},
	{
		name: 'MyIR',
		image: '../assets/myir.png',
		link: '#/apps'
	},
	{
		name: 'OMS+',
		image: '../assets/oms.png',
		link: '#/apps'
	},
	{
		name: 'VOMS',
		image: '../assets/voms.png',
		link: '#/apps'
	},
];



// Name:		AppButton
// Description:	Provides a component for an individual app button.
//				The button can be pressed to load its given link.
// Parameters:	appImage - The image to use for the button.
//				appLink - The link to load when the button is pressed.	
const AppButton = ({ appImage, appLink }) => {
	return (
		<a href={ appLink }>
			<div className="appMenuButton shadowOnHover">
				<img className="appMenuButton__image" src={ appImage } />
			</div>
		</a>
	);
}



// Name:		AppGrid
// Description:	A component that combines multiple AppButtons into
//				a grid. The columns property can be used to define
//				how many buttons to display in each row.
class AppGrid extends React.Component {
	render () {
		let appIndex = 0;
		let rows = [];
		let rowButtons = [];
		let columns = columnCount;
		
		for (let i = 0; i < appList.length; i++) {
			rowButtons.push(
				<td key={ i } >
					<AppButton
						appImage={ appList[i].image }
						appLink={ appList[i].link } />
				</td>);
			if (rowButtons.length === columns) {
				rows.push(
					<tr key={ i } >
						{ rowButtons.map(button => button) }
					</tr>
				)
				rowButtons = [];
			}
		}
		
		if (rowButtons.length > 0) {
			rows.push(
				<tr key='overflow' >
					{ rowButtons.map(button => button) }
				</tr>
			)
			rowButtons = [];
		}
		
		
		return(<table className="appGrid"><tbody>
				{rows.map(row =>
					row
				)}
			</tbody></table>
		);
	}
}


export default AppGrid