const QuestionView = {
    question: function renderQuestion(item){
        let optionElement = document.querySelector("#option_answer");
        let questionElement = document.querySelector("#question h5");
        let answerHTML = '';
        item.option.forEach(element => {
            let data_answer = JSON.stringify(element)
            answerHTML += `<div  class="col-6"><button type="button" class="btn btn-outline-light h-100 w-100" data-answer='${data_answer}'>${element.name}</button></div>`
        });
        questionElement.innerText = item.question;
        optionElement.innerHTML = answerHTML;
    }
}

export {QuestionView}