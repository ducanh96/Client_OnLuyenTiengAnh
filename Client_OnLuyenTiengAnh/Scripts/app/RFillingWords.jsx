// import React from 'react';
// import ReactDOM from 'react-dom';

class RFillingWords extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    ID: 7,
                    title: 'CARTOON FILMS',
                    content: ['of', 'end', 'make', 'then', 'share', 'numbers', 'every', 'frightening', 'mistake', 'mix', 'with', 'amounts', 'cause', 'afterwards', 'all'],
                    questions: [
                        {
                            ID: 41,
                            title: 'Cartoon films have very little limits. If you can draw something, you can (1) ',
                            answer: 'make',
                        },
                        {
                            ID: 42,
                            title: ' it move on the cinema screen. The use (2) ',
                            answer: 'of',
                        },
                        {
                            ID: 43,
                            title: ' new ideas and advanced computer programs means that cartoons are becoming exciting again for people of (3) ',
                            answer: 'all',
                        },
                        {
                            ID: 44,
                            title: ' ages. By the (4) ',
                            answer: 'end',
                        },
                        {
                            ID: 45,
                            title: ' of the 1970s, the cinema world had decided that cartoons were only for children. But soon (5) ',
                            answer: 'afterwards',
                        },
                        {
                            ID: 46,
                            title: ' one or two directors had some original new ideas. They proved that is was possible to make films in which both adults and children could (6) ',
                            answer: 'share',
                        },
                        {
                            ID: 47,
                            title: ' the fun. However, not (7) ',
                            answer: 'every',
                        },
                        {
                            ID: 48,
                            title: ' cartoon films were successful. The Black Cauldron, for example, failed, mainly because it was too (8) ',
                            answer: 'frightening',
                        },
                        {
                            ID: 47,
                            title: ' for children and too childish for adults. Directors learnt from this (9) ',
                            answer: 'mistake',
                        },
                        {
                            ID: 50,
                            title: ' , and the film companies began to make large (10) ',
                            answer: 'amounts',
                        },
                        {
                            ID: 51,
                            title: ' of money again.',
                            answer: '',
                        },
                    ]
                }
            ],
            index: 0,
            lastResult: 0
        }

		this.changePage = this.changePage.bind(this);
		this.viewResult = this.viewResult.bind(this);
		this.makeRetry = this.makeRetry.bind(this);
    }
	viewResult(e) {
		e.preventDefault();
		const result = document.querySelectorAll('input[name="input"]');console.log(result[0]);
		
		let {list, index, lastResult} = this.state;
		if(lastResult !== 0) {
			swal('Try again?', `Your last score is: ${Math.ceil(lastResult / list[0].questions.length * 100)}`, 'warning', {button: 'Do next test!'}).then(result => {
				if(result) {					
					this.changePage(index >= list.length-1 ? 0 : index+1);
				}
			})	
		}
		else {
			if(result.length === list[index].questions.length) {
				let itag, span;
				list[index].questions.map((item, i) => {
					if(i!== list[index].questions.length-1) {
						itag = document.createElement('i'); span=document.createElement('span');

						if(item.answer === result[i].value) {
							lastResult ++;

							itag.className='io ion-checkmark-round';
							span.style.color = 'green';
							span.appendChild(itag);
							result[i].parentNode.appendChild(span);
							result[i].style.color = 'green';
						} else {
							itag.className='io ion-close-round';
							span.style.color = 'red';
							span.appendChild(itag);
							result[i].parentNode.appendChild(span);
							result[i].style.color = 'red';
						}
					}
				})
				
				// message
				swal(`Correct: ${lastResult} / ${list[index].questions.length-1}`,
						`Total scores: ${Math.ceil(lastResult / (list[index].questions.length-1) * 100)}`,
						"success")
				this.setState({lastResult: lastResult});
			} else {
				swal('Message', 'You should answer all the questions before check for result!', 'error');
			}
		}
	}
	makeRetry(e) {
		e.preventDefault();
		this.resetForm();
		this.refs.formContent.reset();
	}
	changePage(i) {		
		this.resetForm();
		this.refs.formContent.reset();
		this.setState({index: i, lastResult: 0});		
	}
	resetForm() {
		const result = document.querySelectorAll('input[name="input"]');
		for(let i=0;i<result.length-1;i++){
			var span = result[i].nextElementSibling;
			if(!span) break;
			result[i].parentNode.removeChild(span);
			result[i].style.color = 'black';
		}			
	}
    render() {
		const {list, index} = this.state;
        return (
			<div className="row content">
				<div className="col-sm-3 sidenav">
					<h4>List</h4>
					<ul className="nav nav-pills nav-stacked">
					{
						list.map((item, i) => <li key={i} className={index === i ? 'active' : ''}><a onClick={this.changePage.bind(this, i)}>R4 - Test {i+1}</a></li> )
					}
					</ul>
				</div>

				<div className="col-sm-9">
					<form onSubmit={this.viewResult} ref="formContent">
						<h4><small>R4 - TEST {index+1}</small></h4>
						<hr />            

						<div style={{fontSize:24, color: 'black'}}>
							<div className="row">
							{
								list[index].content.map((item, i) => <div className="col-xs-4 col-md-3" key={i}>{item}</div>)
							}
							</div>
							<br />

							<p style={{textAlign: 'center'}}><strong>{list[index].title}</strong></p>
							<p style={{textAlign: 'justify'}}>
							{
								list[index].questions.map((item, i) => (
									 <span key={i}>{item.title} <input type="text" name='input' hidden={i===list[index].questions.length-1 ? true : false} placeholder="............................................" /></span>
								))
							}
							</p>
						</div>
					
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
ReactDOM.render(<RFillingWords />, document.getElementById('app'));