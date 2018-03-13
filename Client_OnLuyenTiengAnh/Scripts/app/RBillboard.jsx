// import React from 'react';
// import ReactDOM from 'react-dom';
class RBillBoard extends React.Component {
    constructor() {
		super();
        this.state = {
            list: [
                {
                    ID: 3, questions: [
                        {
                            ID: 21,
                            title: "1.png",
                            answerA: "Children less than five years old cannot go on this ride alone.",
                            answerB: "Children in groups of five or more must have an adult with them.",
                            answerC: "Adults are not allowed on this ride",
                            answer: "Children less than five years old cannot go on this ride alone.",
                        },
                        {
                            ID: 22,
                            title: "2.png",
                            answerA: "There will only one entrance to the park after today.",
                            answerB: "This entrance cannot be used before 11 am today.",
                            answerC: "The park opens at 11 am today.",
                            answer: "This entrance cannot be used before 11 am today.",
                        },
                        {
                            ID: 23,
                            title: "3.png",
                            answerA: "The ride starts when all the seats are full.",
                            answerB: "Do not stand up when the ride is moving.",
                            answerC: "If the ride stops, wait until it begins again.",
                            answer: "Do not stand up when the ride is moving.",
                        },
                        {
                            ID: 24,
                            title: "4.png",
                            answerA: "The park shuts earlier than 6 pm on some days.",
                            answerB: "The park stays open late for one month of year.",
                            answerC: "The park is open all year except in December.",
                            answer: "The park shuts earlier than 6 pm on some days.",
                        },
                        {
                            ID: 25,
                            title: "5.png",
                            answerA: "You can buy a hot meal in two different places.",
                            answerB: "The restaurant near the lake servers hot food in middle of the day.",
                            answerC: "Sandwiches and drinks are only available at lunch time.",
                            answer: "The restaurant near the lake servers hot food in middle of the day.",
                        },
                    ]
                },
                {
                    ID: 4, questions: [
                        {
                            ID: 26,
                            title: "6.png",
                            answerA: "Natalie wants to borrow Ken's textbook",
                            answerB: "Natalie wants to borrow Maria's textbook",
                            answerC: "Natalie wants to borrow Francesco's textbook",
                            answer: "Natalie wants to borrow Francesco's textbook",
                        },
                        {
                            ID: 27,
                            title: "7.png",
                            answerA: "Users nust lock the car park after leaving.",
                            answerB: "People can park here while they are at work.",
                            answerC: "This car park is for employees only.",
                            answer: "This car park is for employees only.",
                        },
                        {
                            ID: 28,
                            title: "8.png",
                            answerA: "The basketball team only wants to see experienced players.",
                            answerB: "There aren't enough team members available on Friday.",
                            answerC: "The Barton College team will visit the gym later today.",
                            answer: "There aren't enough team members available on Friday.",
                        },
                        {
                            ID: 29,
                            title: "9.png",
                            answerA: "All Sunday evening tickets are already sold.",
                            answerB: "You must book tickets for Sunday in advance.",
                            answerC: "A ticket is not necessary for Sunday evening.",
                            answer: "All Sunday evening tickets are already sold.",
                        },
                        {
                            ID: 30,
                            title: "10.png",
                            answerA: "Giacomo will be able to see Charlotte early tomorrow morning.",
                            answerB: "Charlotte needs to arrive in time for Giacomo's meeting tomorrow.",
                            answerC: "Giacomo can collect Charlotte from the airport tomorrow afternoon.",
                            answer: "Giacomo can collect Charlotte from the airport tomorrow afternoon.",
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
    viewResult (e) {
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
				swal(`Correct: ${lastResult} / ${list[index].questions.length}`, `Total scores: ${score}`, "success");
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
						list.map((item, i) => <li key={i} className={index===i ? 'active' : ''}><a onClick={this.changePage.bind(this, i)}>R2 - Test {i+1}</a></li>)
					}
					</ul>
				</div>

				<div className="col-sm-9">
					<h4><small>R2 - TEST {index+1}</small></h4>
					<hr />            

					<form ref="formContent" onSubmit={this.viewResult}>
					{
						list[index].questions.map((item, i) => (
							<div>
								<div className="question-title">
									<h4>Question {i + 1}</h4>
								</div>
								<div style={{marginTop: 15}}>
									<h5>{i + 1}.</h5>
									<img src={`../../public/images/content/app/${item.title}`} /><br /><br />
									<ul>
										<li><label><input type="radio" name={i} value={item.answerA} /> A. {item.answerA}</label></li>
										<li><label><input type="radio" name={i} value={item.answerB} /> B. {item.answerB}</label></li>
										<li><label><input type="radio" name={i} value={item.answerC} /> C. {item.answerC}</label></li>
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
ReactDOM.render(<RBillBoard />, document.getElementById('app'));