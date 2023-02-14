

import {QuestionModel} from "../model/question.js"
import {UserModel} from "../model/user.js"
import { QuestionView } from "../view/index.js";

async function start (){
    checkInfoLogin()
    getOneQuestion(await QuestionModel.list(), getUser(await UserModel.list(), checkInfoLogin().id).total_completed + 1)
    handleCheckAnswer()
    checkAnswer()
}
start()

function checkInfoLogin(){
    let user = {
        id: 2,
        user_name: "trong tien"
    }
    return user
}

function getUser(data, user_id){
    let user = data.find(user => user.id == user_id); 
    return user 
}

function getOneQuestion(data, question_id){
    let item = data.find(item => item.id == question_id); 
    QuestionView.question(item)
}

function handleCheckAnswer(){
    let optionElement = document.querySelectorAll("#option_answer div button");
    if(optionElement){
        optionElement.forEach(element => {
            element.onclick = () => {
                if(document.querySelector("#option_answer div .active")){ 
                    document.querySelector("#option_answer div .active").classList.remove("active")
                }
                element.classList.add("active")
                document.querySelector("#submit_answer").disabled = false;
                checkAnswer()
            }
        })
    }
}

function checkAnswer(){
    let optionElement = document.querySelectorAll("#option_answer div button");
    const optionElementArray = Array.from(optionElement);
    let answer_true = optionElementArray.find(element => JSON.parse(element.getAttribute("data-answer")).value)
    let submitElement = document.querySelector("#submit_answer");
    submitElement.onclick = () => {
        let answerElement = document.querySelector("#option_answer div .active");
        if(!JSON.parse(answerElement.getAttribute("data-answer")).value){
            answerElement.classList.add("error")
        }
        answer_true.classList.add("answer_true")
        submitElement.style.display = "none";
        document.querySelector("#next_question").style.display = "inline";
    } 
}