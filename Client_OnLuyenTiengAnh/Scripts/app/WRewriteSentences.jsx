// import React from 'react';
// import ReactDOM from 'react-dom';

class WRewriteSentences extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [
				{
					ID: 1,
					questions: [
						{
							ID: 1,
							title: "My father used to play football when he was young.",
							guide: "My father doesn't",
							answer: "My father doesn't play football anymore."
						},
						{
							ID: 2,
							title: "Jane gave me a present on my last birthday.",
							guide: "I was",
							answer: "I was given a present on my last birthday."
						},
						{
							ID: 3,
							title: "Let's go swimming!",
							guide: "She suggests",
							answer: "She suggests going swimming."
						},
						{
							ID: 4,
							title: "Would you like a cup of coffee?",
							guide: "He",
							answer: "He invited me a cup of coffee."
						},
						{
							ID: 5,
							title: "We got lost in the jungle because we didn't have a map.",
							guide: "If we had",
							answer: "If we had had a map, we wouldn't got lost in the jungle."
						},
						{
							ID: 6,
							title: "I last saw Bob when I was in Ho Chi Minh city.",
							guide: "I haven't seen",
							answer: "I haven't seen Bob since I was in Ho Chi Minh city."
						},
						{
							ID: 7,
							title: "It is a three-hour drive from Hanoi to Namdinh.",
							guide: "It takes",
							answer: "It takes three hours to drive from Hanoi to Namdinh."
						},
						{
							ID: 8,
							title: "It's a pity you didn't tell us about this.",
							guide: "I wish",
							answer: "I wish you had told us about it."
						},
						{
							ID: 9,
							title: "They think the owner of the house is abroad.",
							guide: "The owner",
							answer: "The owner of the house is thought to be abroad."
						},
						{
							ID: 10,
							title: "The children couldn't go swimming because the sea was very rough.",
							guide: "The sea was too",
							answer: "The sea was too rough for the children to go swimming."
						}
					]
				},
				{
					ID: 2,
					questions: [
						{
							ID: 11,
							title: "You should take the train instead of the bus.",
							guide: "If",
							answer: "If I were you, I'd take the train instead of the bus."
						},
						{
							ID: 12,
							title: "I'm sure that someone forgot to lock the door.",
							guide: "Someone must",
							answer: "Someone must have fogotten to lock the door."
						},
						{
							ID: 13,
							title: "They bought this house ten years ago.",
							guide: "They have",
							answer: "Thet have bought his house for ten years."
						},
						{
							ID: 14,
							title: "The course finished with a big party.",
							guide: "At the end",
							answer: "At the end of the course, there was a big party."
						},
						{
							ID: 15,
							title: "We invited a pop start onto the chatshow, but he didn't turn up.",
							guide: "The pop star who",
							answer: "The pop star who we invited onto the chatshow didn't turn up."
						},
						{
							ID: 16,
							title: "Although she said that she would come, I don't think she ever will.",
							guide: "Despite her",
							answer: "Despite her saying that she would come, I don't think she ever will."
						},
						{
							ID: 17,
							title: "The plane had hardly left the airport when the accident happenned.",
							guide: "No sooner",
							answer: "No sooner had the plane left the airport than the accident happenned."
						},
						{
							ID: 18,
							title: "You feel tired now because you didn't sleep very well last night.",
							guide: "Had you",
							answer: "Had you slept well last night, you wouldn't feel tired now."
						},
						{
							ID: 19,
							title: "When did you start the project?",
							guide: "How long",
							answer: "How long is it since you started the project?"
						},
						{
							ID: 20,
							title: "Their wedding will be held in a lovely church.",
							guide: "The church where",
							answer: "The church where their wedding will be held is lovely."
						}
					]
				}
			],
			index: 0, lastResult: 0, passed: 0
		}
		this.viewResult = this.viewResult.bind(this);
		this.makeRetry = this.makeRetry.bind(this);
		this.changePage = this.changePage.bind(this);
	}
	viewResult(e) {
		e.preventDefault();
		let {list, index, lastResult, passed} = this.state;

		const result = document.querySelectorAll('input[name="input"]');
		if(passed !== 0) {
			swal({
				title: passed === 1 ? 'Try again?' : 'Do next test',
				text: `Your last score: ${lastResult}`,
				icon: 'info'
			}).then(res => {
				if(res) {
					this.resetForm();
					if(passed === 2) {
						this.setState({index: index >= list.length-1 ? 0 : index+1, lastResult: 0, passed: 0});
					}
				}
			})
		} else {
			let itag, span;
			list[index].questions.map((item, i) => {
				itag = document.createElement('i');
				span = document.createElement('span');
				span.innerHTML = `${item.answer}`;

				if(item.answer === result[i].value) {
					itag.className = "ion ion-checkmark-round";
					span.appendChild(itag);
					span.style.color = 'green';
				
					lastResult ++;
				} else {
					itag.className = "ion ion-close-round";
					span.appendChild(itag);
					span.style.color = 'red';
				}
				result[i].parentNode.appendChild(span);
			})

			const score = Math.ceil(lastResult / list[index].questions.length * 100);
			this.setState({lastResult: score, passed: score < 50 ? 1 : 2});
			swal(`Correct: ${lastResult} / ${list[index].questions.length}`, `Total score: ${score}`, 'success');
		}
	}
	makeRetry(e) {
		e.preventDefault();
		this.resetForm();
	}
	changePage(i) {
		this.resetForm();
		this.setState({index: i, lastResult: 0, passed: 0});
	}
	resetForm() {
		const result = document.querySelectorAll('input[name="input"]');
		for(let i=0; i<result.length; i++) {
			if(result[i].nextElementSibling)
			result[i].parentNode.removeChild(result[i].nextElementSibling);
		}
		this.refs.formContent.reset();
	}
	render() {
		const {list, index} = this.state;
		return (
			<div className="row content">
				<div className="col-sm-3 sidenav">
					<h4>List</h4>
					<ul className="nav nav-pills nav-stacked">
					{
						list.map((item, i) => <li className={index===i ? "active" : ""}><a onClick={this.changePage.bind(this, i)}>W1 - Test {i+1}</a></li>)
					}						
					</ul>
				</div>

				<div className="col-sm-9">
					<h4><small>W1 - Test {index+1}</small></h4>
					<hr />
					<form ref="formContent" onSubmit={this.viewResult}>
					{
						list[index].questions.map((item, i) => (
							<div>
								<div className="question-title">
									<h4>Question {i + 1}</h4>
								</div>
								<div style={{marginTop: 15}}>
									<h5>{i + 1}. {item.title}</h5>
									<input className="form-control" type="text" name="input" placeholder={`${item.guide} ...........................................................................................`} />
								</div>
								<br />
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
ReactDOM.render(<WRewriteSentences />, document.getElementById('app'));