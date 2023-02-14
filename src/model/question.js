const QuestionModel = {
    list: async function getQuestion() {
        const data = await fetch('/data/question.json')
            .then((response) => response.json())
            .then((data) => data.data);
        return data
    }
}


export {QuestionModel}