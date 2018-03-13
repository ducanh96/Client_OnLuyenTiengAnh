// import React from 'react';
// import ReactDOM from 'react-dom';

class LFillingWords extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [
				{
					ID: 13,
					url: 'https://youtu.be/-yFeuZIN3Mw',
					title: 'The Language Study Fair',
					questions: [
						{
							ID: 100,
							title: "Dates: 17th to 19th (1)",
							answer: "(of) March",
						},
						{
							ID: 101,
							title: "Place: National Education Centre\n\nFair includes: \n.stands with textbooks\n\n (2)",
							answer: "talk(s)",
						},
						{
							ID: 102,
							title: "Dates: 17th to 19th (1)",
							answer: "(of) March",
						},
					]
				}
			],
			index: 0, lastResult: 0, passed: 0
		}
	}
	render() {
		return (
		
		)
	}
}
ReactDOM.render(<LFillingWords />, document.getElementById('app'));