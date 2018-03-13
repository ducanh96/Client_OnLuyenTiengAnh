class RFillingWords {
    constructor() {
        this.state = {
            list: [
                {
                    ID: 1,
                    title: 'CARTOON FILM',
                    content: "<p>Cartoon films have very little limits. If you can draw something, you can (1) ....................... it move on the cinema screen. The use (2) ....................... new ideas and advanced computer programs means that cartoons are becoming exciting again for people of (3) ........................ ages.</p><p>By the (4) ....................... of the 1970s, the cinema world had decided that cartoons were only for children. But soon (5) .......................... one or two directors had some original new ideas. They proved that is was possible to make films in which both adults and children could (6) .................... the fun.</p><p>However, not (7) ................... cartoon films were successful. The Black Cauldron, for example, failed, mainly because it was too (8) ...................... for children and too childish for adults. Directors learnt from this (9) ...................... , and the film companies began to make large (10) ...................... of money again.</p>",
                    questions: [
                        {
                            ID: 1,
                            answerA: "make",
                            answerB: "do",
                            answerC: "made",
                            answerD: "did",
                            answer: "make",
                        },
                        {
                            ID: 2,
                            answerA: "an",
                            answerB: "of",
                            answerC: "about",
                            answerD: "for",
                            answer: "of",
                        },
                        {
                            ID: 3,
                            answerA: "every",
                            answerB: "all",
                            answerC: "little",
                            answerD: "some",
                            answer: "all",
                        },
                        {
                            ID: 4,
                            answerA: "begin",
                            answerB: "middle",
                            answerC: "late",
                            answerD: "end",
                            answer: "end",
                        },
                        {
                            ID: 5,
                            answerA: "as",
                            answerB: "afterwards",
                            answerC: "then",
                            answerD: "before",
                            answer: "afterwards",
                        },
                        {
                            ID: 6,
                            answerA: "play",
                            answerB: "sell",
                            answerC: "buy",
                            answerD: "share",
                            answer: "share",
                        },
                        {
                            ID: 7,
                            answerA: "every",
                            answerB: "all",
                            answerC: "all of",
                            answerD: "some",
                            answer: "every",
                        },
                        {
                            ID: 8,
                            answerA: "funny",
                            answerB: "frightning",
                            answerC: "lovely",
                            answerD: "sad",
                            answer: "frighting",
                        },
                        {
                            ID: 9,
                            answerA: "success",
                            answerB: "mistake",
                            answerC: "failure",
                            answerD: "archivement",
                            answer: "mistake",
                        },
                        {
                            ID: 10,
                            answerA: "many",
                            answerB: "much",
                            answerC: "amounts",
                            answerD: "a lot",
                            answer: "amounts",
                        },
                    ]
                },
                {
                    ID: 2,
                    title: 'NEW OPPORTUNITIES WITH AN OPEN UNIVERSITY DEGREE',
                    content: "<pLike any other university, the Open University can give you a degree. However, you don’t have to (1) ................. working to study. It can also open up a whole variety (2) .................... interests.</p><p>If you have (3) ....................... studied before, you will enjoy the special, new pleasure of (4)  ....................... your knowledge. You will make friends of (5)  ........................ kinds.</p><p>You may also (6) ....................... that your qualification provides new career opportunities.</p><p>You don't actually (7) .......................... to the Open University for lectures, but study at home, using television, radio and computer software. You can (8)  .................... one class a month if you wish at an Open University centre. Of course, there are exams to take, as in (9)  ................... university.</p><p>If you (10) ...................... like to know more, all you have to do is complete the form below. It could be the start of a wonderful new period in your life.</p>",
                    questions: [
                        {
                            ID: 11,
                            answerA: "stop",
                            answerB: "change",
                            answerC: "make",
                            answerD: "do",
                            answer: "stop",
                        },
                        {
                            ID: 12,
                            answerA: "in",
                            answerB: "of",
                            answerC: "about",
                            answerD: "for",
                            answer: "of",
                        },
                        {
                            ID: 13,
                            answerA: "ever",
                            answerB: "not",
                            answerC: "never",
                            answerD: "yet",
                            answer: "never",
                        },
                        {
                            ID: 14,
                            answerA: "increasing",
                            answerB: "descreasing",
                            answerC: "increase",
                            answerD: "descrease",
                            answer: "increasing",
                        },
                        {
                            ID: 15,
                            answerA: "every",
                            answerB: "all",
                            answerC: "many",
                            answerD: "much",
                            answer: "all",
                        },
                        {
                            ID: 16,
                            answerA: "take",
                            answerB: "make",
                            answerC: "find",
                            answerD: "share",
                            answer: "find",
                        },
                        {
                            ID: 17,
                            answerA: "go",
                            answerB: "went",
                            answerC: "gone",
                            answerD: "have gone",
                            answer: "go",
                        },
                        {
                            ID: 18,
                            answerA: "attend",
                            answerB: "visit",
                            answerC: "join",
                            answerD: "leave",
                            answer: "attend",
                        },
                        {
                            ID: 19,
                            answerA: "many",
                            answerB: "more",
                            answerC: "any",
                            answerD: "lot",
                            answer: "any",
                        },
                        {
                            ID: 10,
                            answerA: "may",
                            answerB: "would",
                            answerC: "can",
                            answerD: "will",
                            answer: "would",
                        },
                    ]
                }
            ],
            index: 0, lastResult: 0, passed: 0
        }
    }
    deploy() {
        this.render();

        $('#app-form-content').on('submit', (e) => this.viewResult(e));
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
                        this.state.index = index >= list.length-1 ? 0 : index+1;
                    }
                    this.state.lastResult = 0;
                    this.state.passed = 0
                    this.render();
                }
            })
        } else {
            if(result.length === list[index].questions.length) {
                let itag;

                list[index].questions.map((item, i) => {
                    itag = document.createElement('i');

                    if(item.answer === result[i].value) {
                        lastResult ++;

                        itag.className = 'ion ion-checkmark-round';
                        result[i].parentNode.appendChild(itag);
                        result[i].parentNode.style.color = 'green';
                    } else {
                        itag.className = 'ion ion-close-round';
                        result[i].parentNode.appendChild(itag);
                        result[i].parentNode.style.color = 'red';
                    }
                })
                const score = Math.ceil(lastResult / list[index].questions.length * 100);
                this.state.passed = score < 50 ? 1 : 2;
                this.state.lastResult = score;
                swal(`Correct: ${lastResult} / ${list[index].questions.length}`, `Total score: ${score}`, 'success');
            } else {
                swal('Message', 'You should answer all questions before view result!', 'error');
            }
        }
    }
    resetForm() {
        const form = document.getElementById('app-form-content');
        form.reset();
    }
    render() {
        const {list, index} = this.state;

        // dt-list
        let html = '';
        list.map((item, i) => html += `<li class=${index===i ? "active" : ""}><a data-id=${i}>R4 - Test ${i+1}</a></li>`);
        $('#app-dt-list').html(html);

        const that = this;
        $('#app-dt-list').find('a').on('click', function(e) {
            e.preventDefault();
            that.state.index = $(this).data('id');
            that.state.passed = 0;
            that.state.lastResult = 0;
            that.resetForm();
            that.render();
        })

        // title
        $('#title').html(`R4 - Test - ${index+1}`);
        // app
        $('#app-title').html(`${list[index].title}`);
        
        $('#app-paragraph').html(list[index].content);

        html = '';
        list[index].questions.map((item, i) => 
            html += `<div>
						<div class="question-title">
							<h4>Question ${i + 1}</h4>
						</div>
						<div style="margin-top: 15px;">
							<h5>${i + 1}</h5>
							<ul>
								<li><label><input type="radio" name=${i} value="${item.answerA}" /> A. ${item.answerA}</label></li>
								<li><label><input type="radio" name=${i} value="${item.answerB}" /> B. ${item.answerB}</label></li>
								<li><label><input type="radio" name=${i} value="${item.answerC}" /> C. ${item.answerC}</label></li>
								<li><label><input type="radio" name=${i} value="${item.answerD}" /> D. ${item.answerD}</label></li>
							</ul>
						</div>
					</div>`
            )
        $('#app-content').html(html);
    }
}
new RFillingWords().deploy();