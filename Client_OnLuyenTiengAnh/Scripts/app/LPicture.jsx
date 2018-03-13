// import React from 'react';
// import ReactDOM from 'react-dom';

class LPicture extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [
				{
					ID: 9,
					url: 'https://youtu.be/JVpNxAcVz58',
					content: "There are seven questions in this part.\nFor each question there three pictures and a short recording.\nChoose the correct picture and put a tick (/) in the box below it.\nExample: What is the time?",
					image: 'l0.png',
					questions: [
						{
							ID: 61,
							title: 'Where will the girls meet?',
							image: 'l1.png',
							answerA: 'A',
							answerB: 'B',
							answerC: 'C',
							answer: 'C',
						},
						{
							ID: 62,
							title: 'Which chair does the man want?',
							image: 'l2.png',
							answerA: 'A',
							answerB: 'B',
							answerC: 'C',
							answer: 'A',
						},
						{
							ID: 63,
							title: 'Which picture shows what the girls need?',
							image: 'l3.png',
							answerA: 'A',
							answerB: 'B',
							answerC: 'C',
							answer: 'A',
						},
						{
							ID: 64,
							title: 'Which picture shows what happened?',
							image: 'l4.png',
							answerA: 'A',
							answerB: 'B',
							answerC: 'C',
							answer: 'B',
						},
						{
							ID: 65,
							title: "What is Sarah's mother doing?",
							image: 'l5.png',
							answerA: 'A',
							answerB: 'B',
							answerC: 'C',
							answer: 'C',
						},
						{
							ID: 66,
							title: 'What luggage is the man taking on holiday?',
							image: 'l6.png',
							answerA: 'A',
							answerB: 'B',
							answerC: 'C',
							answer: 'A',
						},
						{
							ID: 67,
							title: 'Which photograph does the man like?',
							image: 'l7.png',
							answerA: 'A',
							answerB: 'B',
							answerC: 'C',
							answer: 'C',
						},
					]
				},
				{
					ID: 10,
					url: 'https://youtu.be/U0mB5nYoDek',
					content: "There are seven questions in this part.\nFor each question there three pictures and a short recording.\nChoose the correct picture and put a tick (/) in the box below it.\nExample: What is the time?",
					image: 'l0.png',
					questions: [
						{
							ID: 68,
							title: 'When and where are thay meeting?',
							image: 'l8.png',
							answerA: 'A',
							answerB: 'B',
							answerC: 'C',
							answer: 'C',
						},
						{
							ID: 69,
							title: 'What is Chris get for his birthday?',
							image: 'l9.png',
							answerA: 'A',
							answerB: 'B',
							answerC: 'C',
							answer: 'C',
						},
						{
							ID: 70,
							title: 'What does Mr Jones look like?',
							image: 'l10.png',
							answerA: 'A',
							answerB: 'B',
							answerC: 'C',
							answer: 'C',
						},
						{
							ID: 71,
							title: 'Where is he going to plant the tree?',
							image: 'l11.png',
							answerA: 'A',
							answerB: 'B',
							answerC: 'C',
							answer: 'A',
						},
						{
							ID: 72,
							title: "What is the man going to buy?",
							image: 'l12.png',
							answerA: 'A',
							answerB: 'B',
							answerC: 'C',
							answer: 'C',
						},
						{
							ID: 73,
							title: "Which is Gary's room?",
							image: 'l13.png',
							answerA: 'A',
							answerB: 'B',
							answerC: 'C',
							answer: 'A',
						},
						{
							ID: 74,
							title: 'Which is the best vehicle for the man?',
							image: 'l14.png',
							answerA: 'A',
							answerB: 'B',
							answerC: 'C',
							answer: 'A',
						},
					]
				}
			],
			index: 0, lastResult: 0, passed: 0 // 0-do nothing yet, 1-failed, 2-passed
		}
		this.viewResult = this.viewResult.bind(this);
		this.changePage = this.changePage.bind(this);
		this.makeRetry = this.makeRetry.bind(this);
	}
	viewResult(e) {
		e.preventDefault();
		let {list, index, lastResult, passed} = this.state;

		const result = document.querySelectorAll('input[type="radio"]:checked');

		if(passed !== 0) {
			swal({
				title: passed === 1 ? 'Try again?' : 'Make another test?',
				text: `Your last score is: ${lastResult}`,
				icon: 'info',
				button: 'Let me do!'
			}).then(res => {
				if(res) {
					this.resetForm();
					if(passed === 2) {
						this.setState({index: index >= list.length -1 ? 0 : index+1});
					}
					this.setState({lastResult: 0, passed: 0})
				}
			})
		} else {
			if(result.length === list[index].questions.length) {
				let itag;
				list[index].questions.map((item, i) => {
					itag = document.createElement('i');

					if(item.answer === result[i].value) {
						lastResult ++;
						itag.className="ion ion-checkmark-round";
						result[i].parentNode.appendChild(itag);
						result[i].parentNode.style.color = 'green';
					} else {
						itag.className="ion ion-close-round";
						result[i].parentNode.appendChild(itag);
						result[i].parentNode.style.color = 'red';
					}
				})
				const score = Math.ceil(lastResult / list[index].questions.length * 100);
				this.setState({lastResult: score, passed: score < 50 ? 1 : 2});

				swal(`Correct: ${lastResult} / ${list[index].questions.length}`, `Total score: ${score}`, 'success');
			} else {
				swal('Message', 'You should answer all the questions before check the result!', 'error');
			}
		}
	}
	changePage(i) {
		if(i!==this.state.index) {
			this.resetForm();
			this.setState({index: i, lastResult: 0, passed: 0});
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
						list.map((item, i) => <li className={index===i ? "active" : ""}><a onClick={this.changePage.bind(this, i)}>L1 - Test {i+1}</a></li>)
					}						
					</ul>
				</div>

				<div className="col-sm-9">
					<h4><small>L1 - Test {index+1}</small></h4>
					<hr />

					<video style={{width: 400, height: 240}} controls>
						<source src={list[index].url} type="video/mp4" />
						<source type="video/ogg" />Your browser does not support HTML5 video.
					</video>
					
					<p>{list[index].content}</p>
					<span>
						<img src={`../../public/images/content/app/l0.png`} />
					</span>
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
									<img src={`../../public/images/content/app/${item.image}`} /><br /><br />
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
ReactDOM.render(<LPicture />, document.getElementById('app'));