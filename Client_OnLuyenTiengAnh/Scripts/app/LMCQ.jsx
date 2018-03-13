// import React from 'react';
// import ReactDOM from 'react-dom';

class LMCQ extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [
				{
					ID: 11,
					url: 'https://youtu.be/U0mB5nYoDek',
					content: 'Listen and choose the best answer',
					questions: [
						{
							ID: 75,
							title: "When and where are they meeting?",
							answerA: "At 7:30 in the restaurant",
							answerB: "At 7:00 outside the restaurant",
							answerC: "At 7:00 outside the restaurant",
							answer: "At 7:00 outside the restaurant",
						},
						{
							ID: 76,
							title: "What will Chris get for his birthday?",
							answerA: "CDs",
							answerB: "A T-shirt",
							answerC: "A book on tennis",
							answer: "A book on tennis",
						},
						{
							ID: 77,
							title: "What does Mr Jones look like?",
							answerA: "He is bald and is wearing glasses",
							answerB: "He has thick beard and moustache",
							answerC: "He has thick moustache and is wearing glasses",
							answer: "He has thick moustache and is wearing glasses",
						},
						{
							ID: 78,
							title: "Where is he going to plant the tree?",
							answerA: "At the back of the garage",
							answerB: "By the front door",
							answerC: "At the other end of the lawn",
							answer: "At the back of the garage",
						},
						{
							ID: 79,
							title: "What is the man going to buy?",
							answerA: "A grapes and apples",
							answerB: "Bananas and apples",
							answerC: "Bananas",
							answer: "Bananas",
						},
						{
							ID: 80,
							title: "Which is Gary's room?",
							answerA: "The one in the middle on the third floor",
							answerB: "The one in the middle on the top floor",
							answerC: "The one on the third floor on the left",
							answer: "The one in the middle on the third floor",
						},
						{
							ID: 81,
							title: "Which is the best vehicle for the man?",
							answerA: "A 4 seat car",
							answerB: "A sport car",
							answerC: "A minivan",
							answer: "A 4 seat car",
						},
					]
				},
				{
					ID: 12,
					url: 'https://youtu.be/y4E_Qwe04qw',
					content: 'Listen and choose the best answer',
					questions: [
						{
							ID: 82,
							title: "Where is the station?",
							answerA: "Go straight ahead. It's at the end of the road",
							answerB: "Take the second on the right. It's the end of that road",
							answerC: "Take the first on the right. It's the end of the road",
							answer: "Take the second on the right. It's the end of that road",
						},
						{
							ID: 83,
							title: "Where did the woman put the calculator?",
							answerA: "On the desk",
							answerB: "On the desk by the lamp",
							answerC: "On the pile of books next to the lamp",
							answer: "On the pile of books next to the lamp",
						},
						{
							ID: 84,
							title: "Where is Helen?",
							answerA: "She is with two men. One man is wearing shorts and a T-shirt. The other is wearing trousers",
							answerB: "She is with the man in shorts and a T-shirt",
							answerC: "She is with the man wearing trousers",
							answer: "She is with two men. One man is wearing shorts and a T-shirt. The other is wearing trousers",
						},
						{
							ID: 85,
							title: "Which building was hit by lightning?",
							answerA: "A building",
							answerB: "A factory near the church",
							answerC: "The church",
							answer: "A factory near the church",
						},
						{
							ID: 86,
							title: "What does the woman want to buy?",
							answerA: "A pair of boots",
							answerB: "A pair of high heels",
							answerC: "A pair of flat shoes",
							answer: "A pair of flat shoes",
						},
						{
							ID: 87,
							title: "Which picture does the woman decide to send?",
							answerA: "The picture of a man in front of the house",
							answerB: "The picture of two children playing ball in front of the house",
							answerC: "The picture of two children playing in the house",
							answer: "The picture of a man in front of the house",
						},
						{
							ID: 88,
							title: "Which hotel has the man chosen?",
							answerA: "The hotel woth four floors and it is on the seashore",
							answerB: "The hotel with four floors, it is in the city centre and it has a swimming pool",
							answerC: "The hotel with four floors, it is on the seashore and it has a swimming pool",
							answer: "The hotel with four floors, it is on the seashore and it has a swimming pool",
						},
					]
				}
			],
			index: 0, lastResult: 0, passed: 0
		}
		this.viewResult = this.viewResult.bind(this);
		this.changePage = this.changePage.bind(this);
		this.makeRetry = this.makeRetry.bind(this);
	}
	viewResult(e) {
		e.preventDefault();
		let {list, index, lastResult, passed} = this.state;
		if(passed !== 0) {
			swal({
				title: passed === 1 ? 'Try again?' : 'Do next test',
				text: `Your last score: ${lastResult}`,
				icon: 'info',
				button: 'Let me do!'
			}).then(res => {
				if(res) {
					this.resetForm();
					this.setState({lastResult: 0, passed: 0});
					if(passed === 2) {
						this.setState({index: index >= list.length-1 ? 0 : index+1});
					}
				}
			})
		} else {
			const result = document.querySelectorAll('input[type="radio"]:checked');
			if(result.length === list[index].questions.length) {
				let itag;

				list[index].questions.map((item, i) => {
					itag = document.createElement('i');

					if(item.answer === result[i].value) {
						lastResult ++;
						itag.className = "ion ion-checkmark-round";
						result[i].parentNode.appendChild(itag);
						result[i].parentNode.style.color = 'green';
					} else {
						itag.className = "ion ion-close-round";
						result[i].parentNode.appendChild(itag);
						result[i].parentNode.style.color = 'red';
					}
				})
				const score = Math.ceil(lastResult / list[index].questions.length * 100);
				this.setState({lastResult: score, passed: score < 50 ? 1 : 2});
				swal(`Correct: ${lastResult} / ${list[index].questions.length}`, `Total score: ${score}`, 'success');
			} else {
				swal('Message', 'You should answer all the questions before check to result!', 'error');
			}
		}
	}
	resetForm() {
		const result = document.querySelectorAll('input[type="radio"]:checked');
		for(let i=0; i<result.length; i++) {
			result[i].parentNode.removeChild(result[i].nextElementSibling);
			result[i].parentNode.style.color = 'black';
		}
		this.refs.formContent.reset();
	}
	changePage(i) {
		this.resetForm();
		this.setState({index: i, lastResult: 0, passed: 0});
	}
	makeRetry(e) {
		e.preventDefault();
		this.resetForm();
		this.setState({lastResult: 0, passed: 0});
	}
	render() {
		const {list, index} = this.state;
		return (
			<div className="row content">
				<div className="col-sm-3 sidenav">
					<h4>List</h4>
					<ul className="nav nav-pills nav-stacked">
					{
						list.map((item, i) => <li className={index===i ? "active" : ""}><a onClick={this.changePage.bind(this, i)}>L2 - Test {i+1}</a></li>)
					}						
					</ul>
				</div>

				<div className="col-sm-9">
					<h4><small>L2 - Test {index+1}</small></h4>
					<hr />

					<h4>{list[index].content}</h4>
					<video style={{width: 400, height: 240}} controls>
						<source src={list[index].url} type="video/mp4" />
						<source type="video/ogg" />Your browser does not support HTML5 video.
					</video>
					
					<br /><br />
					<form ref="formContent" onSubmit={this.viewResult}>
					{
						list[index].questions.map((item, i) => (
							<div>
								<div className="question-title">
									<h4>Question {i + 1}</h4>
								</div>
								<div style={{marginTop: 15}}>
									<h5>{i + 1}. {item.title}</h5>
									<ul>
										<li><label><input type="radio" name={i} value={item.answerA} /> {item.answerA}</label></li>
										<li><label><input type="radio" name={i} value={item.answerB} /> {item.answerB}</label></li>
										<li><label><input type="radio" name={i} value={item.answerC} /> {item.answerC}</label></li>
									</ul>
								</div>
							</div>
						))
					}
					<footer className="container-fluid">
						<button className="btn btn-primary" style={{marginRight: 5}}>View Result</button>
						<button className="btn btn-success" onClick={this.makeRetry}>Try again?</button>
					</footer>
					</form>
				</div>
			</div>
		)
	}
}
ReactDOM.render(<LMCQ />, document.getElementById('app'));