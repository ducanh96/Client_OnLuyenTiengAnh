// import React from 'react';
// import ReactDOM from 'react-dom';

class RVocabulary extends React.Component {
    constructor() {
		super();
        this.state = {
            list: [
                {
                    ID: 1, questions: [
                        {
                            ID: 1,
                            title: "Tom doesn't like dancing, but Mike..........",
                            answerA: "does",
                            answerB: "doesn't",
                            answerC: "do",
                            answerD: "did",
                            answer: "does",
                        },
                        {
                            ID: 2,
                            title: "Listen! Somebody..........for help.",
                            answerA: "are screaming",
                            answerB: "scream",
                            answerC: "is screaming",
                            answerD: "has screamed",
                            answer: "is screaming",
                        },
                        {
                            ID: 3,
                            title: "Waiter! There..........forks on this table",
                            answerA: "are",
                            answerB: "isn't any",
                            answerC: "are not any",
                            answerD: "are some",
                            answer: "are not any",
                        },
                        {
                            ID: 4,
                            title: "I have a test tomorrow, so I ......... sit up late tonight to study.",
                            answerA: "will have to",
                            answerB: "can have to",
                            answerC: "have",
                            answerD: "have to",
                            answer: "have to",
                        },
                        {
                            ID: 5,
                            title: "An island on which .......... is called a deserted island.",
                            answerA: "no people",
                            answerB: "no peoples live",
                            answerC: "no people live",
                            answerD: "people are living",
                            answer: "no people live",
                        },
                        {
                            ID: 6,
                            title: "Linda..........tie her shoes when she was only 3 years old.",
                            answerA: "knew to",
                            answerB: "knew how to",
                            answerC: "could to",
                            answerD: "may",
                            answer: "knew how to",
                        },
                        {
                            ID: 7,
                            title: "We wondered who..........to pay for the broken window.",
                            answerA: "is going",
                            answerB: "was going",
                            answerC: "have",
                            answerD: "would",
                            answer: "was going",
                        },
                        {
                            ID: 8,
                            title: "John said that no other car could go ......... his car.",
                            answerA: "so fast like",
                            answerB: "as fast as",
                            answerC: "fast than",
                            answerD: "as fastly as",
                            answer: "as fast as",
                        },
                        {
                            ID: 9,
                            title: "A number of accidents  in the last 2 years..........caused by drunk driving.",
                            answerA: "were",
                            answerB: "have been",
                            answerC: "have",
                            answerD: "are",
                            answer: "have been",
                        },
                        {
                            ID: 10,
                            title: "Perharps people don't like ......... tourists in their country.",
                            answerA: "so much",
                            answerB: "too much",
                            answerC: "so many",
                            answerD: "a lot",
                            answer: "so many",
                        },
                    ]
                },
                {
                    ID: 2, questions: [
                        {
                            ID: 11,
                            title: "I..........of leaning how to fly a plane now.",
                            answerA: "am thinking",
                            answerB: "think",
                            answerC: "thought",
                            answerD: "have thought",
                            answer: "am thinking",
                        },
                        {
                            ID: 12,
                            title: "My car's old but it never...........",
                            answerA: "breaks down",
                            answerB: "break down",
                            answerC: "get down",
                            answerD: "gets down",
                            answer: "breaks down",
                        },
                        {
                            ID: 13,
                            title: "Lots of tulips..........grown in Holland",
                            answerA: "is",
                            answerB: "are",
                            answerC: "have",
                            answerD: "has",
                            answer: "are",
                        },
                        {
                            ID: 14,
                            title: "this room is used ......... meetings.",
                            answerA: "for",
                            answerB: "by",
                            answerC: "to",
                            answerD: "as",
                            answer: "for",
                        },
                        {
                            ID: 15,
                            title: "My mother is a little .......... now.",
                            answerA: "spots",
                            answerB: "wrinkled",
                            answerC: "wrinkle",
                            answerD: "wrinkles",
                            answer: "wrinkled",
                        },
                        {
                            ID: 16,
                            title: "Sister Wendy not only  loves God and art but also..........good food and wine.",
                            answerA: "hates",
                            answerB: "dislikes",
                            answerC: "enjoys",
                            answerD: "perfers",
                            answer: "enjoys",
                        },
                        {
                            ID: 17,
                            title: "I..........what you mean.",
                            answerA: "am not understanding",
                            answerB: "don't understand",
                            answerC: "didn't understand",
                            answerD: "haven't understood",
                            answer: "don't understand",
                        },
                        {
                            ID: 18,
                            title: "About one thousand people are made ......... in that factory.",
                            answerA: "employed",
                            answerB: "worked",
                            answerC: "lost their job",
                            answerD: "redundant",
                            answer: "redundant",
                        },
                        {
                            ID: 19,
                            title: "Look..........that strange man over there! What's he doing?.",
                            answerA: "after",
                            answerB: "for",
                            answerC: "at",
                            answerD: "up",
                            answer: "at",
                        },
                        {
                            ID: 20,
                            title: "......... people don't think of other people.",
                            answerA: "mean",
                            answerB: "selfish",
                            answerC: "tolerant",
                            answerD: "generous",
                            answer: "selfish",
                        },
                    ]
                }
            ],
            index: 0,
            lastResult: 0,
			passed: 0
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
						list.map((item, i) => <li key={i} className={index === i ? 'active' : ''}><a onClick={this.changePage.bind(this, i)}>R1 - Test {i+1}</a></li>)
					}
					</ul>
				</div>

				<div className="col-sm-9">
					<h4><small>R1 - Test {index+1}</small></h4>
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
									<ul>
										<li><label><input type="radio" name={i} value={item.answerA} /> A.{item.answerA}</label></li>
										<li><label><input type="radio" name={i} value={item.answerB} /> B.{item.answerB}</label></li>
										<li><label><input type="radio" name={i} value={item.answerC} /> C.{item.answerC}</label></li>
										<li><label><input type="radio" name={i} value={item.answerD} /> D.{item.answerD}</label></li>
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
ReactDOM.render(<RVocabulary />, document.getElementById('app'));