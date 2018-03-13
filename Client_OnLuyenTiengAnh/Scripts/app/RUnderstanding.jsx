// import React from 'react';
// import ReactDOM from 'react-dom';

class RUnderstanding extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [
				{
                    ID: 5, 
					content: `A month ago I had no idea that on Saturday afternoon in November I'd be hanging 30 metres above the ground and enjoying it. Now I looked down at the river far below me, and realised why people love rock-climbing. 
						My friend Matt and I had arrived at the Activity Centre on Friday evening. The accommodation wasn't wonderful, but we had everything we needed (beds, blankets, food), and we were pleased to be out of the city and in the fresh air. On Saturday morning we met the other ten members of our group. Cameron had come along with two friends, Kevin and Simon, while sisters Carole and Lynn had come with Amanda. We had come from various places and none of us knew the area. 
						We knew we were going to spend the weekend outdoors, but none of us was sure exactly how. Half of us spent the morning caving while the others went rock-climbing and then we changed at lunchtime. Matt  and I went to the caves first. Climbing out was harder than going in, but after a good deal of pushing, we were out at last - covered in mud but pleased and excited by what we'd done. `,
					questions: [
                        {
                            ID: 31,
                            title: "What is the writer trying to do in the text?",
                            answerA: "advertise the Activity Centre",
                            answerB: "describe some people she met",
                            answerC: "explain how to do certain outdoor sports",
							answerD: "say how she spent some free time",
                            answer: "say how she spent some free time",
                        },
                        {
                            ID: 32,
                            title: "What can the reader learn from the text?",
                            answerA: "when to depend on other people at the Centre",
                            answerB: "how to apply for a place at the Centre",
                            answerC: "what sort of activitiees you can experience at the Centre",
							answerD: "which time of year is best to attend the Centre",
                            answer: "what sort of activitiees you can experience at the Centre",
                        },
                        {
                            ID: 33,
                            title: "How do you think the writer might describe her weekend?",
                            answerA: "interesting",
                            answerB: "relaxing",
                            answerC: "unpleasant",
							answerD: "frightening",
                            answer: "interesting",
                        },
                        {
                            ID: 34,
                            title: "What do we learn about the group?",
                            answerA: "Some of them had been there before.",
                            answerB: "They had already chosen theirpreferred activities.",
                            answerC: "Some of them already knew each other.",
							answerD: "The came from the same city.",
                            answer: "Some of them already knew each other.",
                        },
                        {
                            ID: 35,
                            title: "Which of following advertisements describes the Activity Centre?",
                            answerA: "ACTIVITY CENTRE. Set in beautiful countryside. Accommodation and meals provided. Make up your own timeable - choose from a variety of activities (horse-riding, fishing, hill-walking, sailing, mountain-biking).",
                            answerB: "ACTIVITY CENTRE. Set in beautiful countryside. Accommodation provided. Work with a group - we show you a range of outdoor activities the you didn't realise you could do!",
                            answerC: "ACTIVITY CENTRE. Set in beautiful countryside. enjoy the luxury of our accommodation - each room has its own bathroom. Work with a group, or hav individual teaching.",
							answerD: "ACTIVITY CENTRE. Set in beautiful countryside. You can spend the day doing outdoor activities and we will find your accommodation with a local family.",
                            answer: "ACTIVITY CENTRE. Set in beautiful countryside. Accommodation provided. Work with a group - we show you a range of outdoor activities the you didn't realise you could do!",
                        },
                    ]
                },
                {
                    ID: 6, 
					content: `Winter is dangerous because it's so difficult to know what is going to happen and accidents take place so easy. Fog can be waiting to meet you over the top of a hill. Ice might be hiding beneath the melting snow, waiting to send you off the road. The car coming towards you may suddenly slice across the road. 
						Rule number one for driving on icy roads is to drive smoothly. Uneven movements can make a car suddenly very diffcult to control. So every time you either turn the wheel, touch the brakes or increase your speed, you must be as gentle ans slow as possible. Imagine you are driving with a full cup of coffee on the seat next to you. Drive so that you wouldn't spill it. 
						Rule number two is to pay attention to what might happen. The more ice there is, the further down the road you have to look. Test how long it takes to stop by gently braking. Remember that you may be driving more quickly than you think. 
						In general, allow doulbe you normal stopping distance when the road is wet, three times this distance on snow, and even more on ice. Try to stay in control of your car at all times and you will avoid troulbe.`,
					questions: [
                        {
                            ID: 36,
                            title: "What is the writer trying to do in the text?",
                            answerA: "complain about bad winterdriving",
                            answerB: "give information about winter weather",
                            answerC: "warn people against driving in winter",
							answerD: "advise people about safe driving in winter",
                            answer: "advise people about safe driving in winter",
                        },
                        {
                            ID: 37,
                            title: "what would somebody read this text?",
                            answerA: "to find out about the weather",
                            answerB: "for information on driving lessons",
                            answerC: "to learn about better driving",
                            answerD: "to decide when to travel",
							answer: "to learn about better driving",
                        },
                        {
                            ID: 38,
                            title: "What does the writer think?",
                            answerA: "People should avoid driving in the snow.",
                            answerB: "Drivers should expect problems in winter.",
                            answerC: "People drive too fast in winter.",
							answerD: "Winter drivers should use their brakes less.",
                            answer: "People should avoid driving in the snow.",
                        },
                        {
                            ID: 39,
                            title: "Why does the writer talk about a cup of coffee?",
                            answerA: "to explain the importance of smooth movements",
                            answerB: "because he thinks refreshments are important for drivers",
                            answerC: "because he wants drivers to be relaxed",
							answerD: "to show how it can be spilled",
                            answer: "to explain the importance of smooth movements",
                        },
                        {
                            ID: 40,
                            title: "Which traffic sign shows the main idea of the text?<img src='../../public/images/content/app/11.png' />",
                            answerA: "A",
                            answerB: "B",
                            answerC: "C",
							answerD: "D",
                            answer: "A",
                        },
                    ]
                }
			],
			index: 0,
			lastResult: 0, passed: 0
		}

		this.viewResult = this.viewResult.bind(this);
		this.makeRetry = this.makeRetry.bind(this);
		this.changePage = this.changePage.bind(this);
	}
	viewResult(e) {
        e.preventDefault();
		let {list, index, lastResult, passed} = this.state;

		const result = document.querySelectorAll('input[type="radio"]:checked');
		if(passed !== 0) {
			swal({
				title: passed === 1 ? 'Try again?' : 'Do next test',
				text: `Your last score: ${lastResult}`,
				icon: 'info'
			}).then(res => {
				if(res) {					
					this.resetForm();
					if(passed === 2) {
						this.setState({index: index >= list.length-1 ? 0 : index+1});
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
				swal('Message', 'You should answer all questions before view result!', 'error');
			}
		}
    }
    makeRetry(e) {
		e.preventDefault();
        this.resetForm();
		this.setState({lastResult: 0, passed: 0});
    }
	changePage(i) {
		this.resetForm();
		this.setState({index: i, lastResult: 0, passed: 0});
	}
	resetForm() {
		const result = document.querySelectorAll('input[type="radio"]:checked');
		for(let i=0;i<result.length;i++) {
			if(result[i].nextElementSibling) {
				result[i].parentNode.removeChild(result[i].nextElementSibling);
				result[i].parentNode.style.color = 'black';
			}
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
						list.map((item, i) => <li key={i} className={i===index ? "active" : ""}><a onClick={this.changePage.bind(this, i)}>R3 - Test {i+1}</a></li>)
					}
					</ul>
				</div>

				<div className="col-sm-9">					
					<h4><small>R3 - TEST {index+1}</small></h4>
					<hr />                

					<div>
						<p>{list[index].content}</p>
					</div>
					<form onSubmit={this.viewResult} ref="formContent">		
						{
							list[index].questions.map((item, i) => (
								<div>
									<div className="question-title">
										<h4>Question {i+1}</h4>
									</div>
									<div style={{marginTop: 15}}>
										<h5>{i+1}. {item.title}</h5>
										<ul>
											<li><label><input type="radio" name={i} value={item.answerA} /> A. {item.answerA}</label></li>
											<li><label><input type="radio" name={i} value={item.answerB} /> B. {item.answerB}</label></li>
											<li><label><input type="radio" name={i} value={item.answerC} /> C. {item.answerC}</label></li>
											<li><label><input type="radio" name={i} value={item.answerD} /> D. {item.answerD}</label></li>
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
ReactDOM.render(<RUnderstanding />, document.getElementById('app'));