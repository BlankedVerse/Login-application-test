// Filename:	AppGrid.js
// Description:	A component that arranges links as a series of
//				image buttons arranged in a grid. 

import React from 'react'
import { render } from 'react-dom'


const defaultColumnCount = 3;


// A list of applications used in the component.
const appList = [{
		name: 'Interop',
		image: '../assets/interop.png',
		link: '#'
	},
	{
		name: 'PHC Hub',
		image: '../assets/phchub.png',
		link: '#'
	},
	{
		name: 'ImmuCast',
		image: '../assets/immucast.png',
		link: '#'
	},
	{
		name: 'SENTINEL',
		image: '../assets/sentinel.png',
		link: '#'
	},
	{
		name: 'SMaRT',
		image: '../assets/smart.png',
		link: '#'
	},
	{
		name: 'ImmsLink',
		image: '../assets/immslink.png',
		link: '#'
	},
	{
		name: 'MyIR',
		image: '../assets/myir.png',
		link: '#'
	},
	{
		name: 'OMS+',
		image: '../assets/oms.png',
		link: '#'
	},
	{
		name: 'VOMS',
		image: '../assets/voms.png',
		link: '#'
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
			<img src={ appImage } />
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
		let columns = 0;
		
		if (this.props.columns === undefined) {
			columns = defaultColumnCount;
		}
		else {
			columns = this.props.columns;
		}
		
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
		
		
		return(<table><tbody>
				{rows.map(row =>
					row
				)}
			</tbody></table>
		);
	}
}


export default AppGrid