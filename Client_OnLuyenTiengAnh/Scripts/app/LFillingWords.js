class LFillingWords {
    constructor() {
        this.state = {
            list: [
				{
				    ID: 13,
				    url: 'https://youtu.be/-yFeuZIN3Mw',
				    title: 'The Language Study Fair',
				    content: "<p>Dates: 17th to 19th (1) <input type='text' name='input' /></p><p>Place: National Education Centre</p><p>Fair includes: <ul><li><p>(2) <input type='text' name='input' /> by educational speakers</p></li><li><p>exhibition of furniture</p></li><li><p>demonstrations of latest (3) <input type='text' name='input' /></p></li></ul><p>Opening hours: 9:30 AM - 5:00 PM. Thursday and Friday 9:30 AM - 4:00 PM (4) <input type='text' name='input' /></p><p>Tickets: $5 or $3 for (5) <input type='text' name='input' /></p><p>Tickets can be booked by ringing the hotline on (6) <input type='text' name='input' /></p><br />",
				    questions: [
						{
						    ID: 100,
						    answer: "March",
						},
						{
						    ID: 101,
						    answer: "talk",
						},
						{
						    ID: 102,
						    answer: "computer program",
						},
                        {
                            ID: 103,
                            answer: "Saturday",
                        },
						{
						    ID: 104,
						    answer: "student",
						},
						{
						    ID: 105,
						    answer: "9847711",
						},
				    ]
				},
                {
                    ID: 14,
                    url: 'https://youtu.be/gF6lR2oBlzY',
                    title: 'Information sheet',
                    content: "<p><b>Name:</b> <i>Mike Davis</i></p><p><b>Age:</b> <i>13 years</i></p><p><b>Favorite subject: (1)</b> <input type='text' name='input' /></p><p><b>Favorite sport: (2)</b> <input type='text' name='input' /></p><p><b>Usual transport: (3)</b> <input type='text' name='input' /></p><p><b>On Saturday: (4)</b> <input type='text' name='input' /></p><p><b>On (5)</b> <input type='text' name='input' /> : Young Farmere's Group</p><p><b>Future Job: (6)</b> <input type='text' name='input' /></p><br />",
                    questions: [
						{
						    ID: 106,
						    answer: "science",
						},
						{
						    ID: 107,
						    answer: "running",
						},
						{
						    ID: 108,
						    answer: "bike",
						},
                        {
                            ID: 109,
                            answer: "helps his uncle to milk fifty cows",
                        },
						{
						    ID: 110,
						    answer: "Monday",
						},
						{
						    ID: 111,
						    answer: "farmer",
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
        $('#btn-retry').on('click', (e) => {
            e.preventDefault();
            this.resetForm();
        })        
    }
    viewResult(e) {
        e.preventDefault();
        let {list, index, lastResult, passed} = this.state;

        if(passed !== 0) {
            swal({
                title: lastResult < 50 ? 'Try again?' : 'Do next test',
                text: `Your last score is: ${lastResult}`,
                icon: 'info',
                button: 'Let me do!'
            }).then(res => {
                if(res) {
                    this.resetForm();
                    this.state.passed = 0;
                    this.state.lastResult = 0;
                    if(passed === 2) {
                        this.state.index = index >= list.length-1 ? 0 : index+1;
                        this.render();
                    }
                }
            })
        } else {
            const result = document.querySelectorAll('input[name="input"]');
            let itag, span;
            list[index].questions.map((item, i) => {
                itag = document.createElement('i'); span = document.createElement('span');
                if(item.answer === result[i].value) {
                    lastResult ++;

                    itag.className = 'ion ion-checkmark-round';
                    span.appendChild(itag);
                    span.style.color = 'green';
                } else {
                    itag.className = 'ion ion-close-round';
                    span.appendChild(itag);
                    span.style.color = 'red';
                }
                result[i].parentNode.appendChild(span);
            })

            const score = Math.ceil(lastResult / list[index].questions.length * 100);
            this.state.passed = score < 50 ? 1 : 2;
            this.state.lastResult = score;
            swal(`Correct: ${lastResult} / ${list[index].questions.length}`, `Total score: ${score}`, 'success');
        }
    }
    resetForm() {
        const result = document.querySelectorAll('input[name="input"]');        
        //
        for(let i=0; i<result.length; i++) {
            result[i].parentNode.removeChild(result[i].nextElementSibling);
        }
        const form = document.getElementById('app-form-content');
        form.reset();
    }
    render() {
        const {list, index} = this.state;

        let html = '';
        list.map((item, i) => html += `<li class=${index === i ? "active" : ""}><a data-id=${i}>L3 - Test ${i+1}</a></li>`);
        $('#app-dt-list').html(html);
        const that = this;
        $('#app-dt-list').find('a').on('click', function(e) {
            e.preventDefault();
            that.state.index = $(this).data('id');
            that.state.passed = 0;
            that.state.lastResult = 0;
            that.render();
        })
        //
        $('#app-page').html(`L3 - Test ${index + 1}`)
        $('#app-content').html(list[index].content);
        $('#app-title').html(list[index].title);
        $('#app-video-src').attr('src', list[index].url);
    }
}
new LFillingWords().deploy();