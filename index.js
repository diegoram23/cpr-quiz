import { questions } from "/questions.js";


const questionEl = document.getElementById('question')
const answerBtn = document.getElementById('answer-buttons')
const nextBtn = document.getElementById('next-btn')

let score = 0
let currentQuestionIndex = 0

const startQuiz = () => {
    currentQuestionIndex = 0
    score = 0
    nextBtn.innerHTML = 'Next'
    showQuestion()
}


const showQuestion = () => {
    let currentQuestion = questions[currentQuestionIndex]
    let questionNumber = currentQuestionIndex + 1
    questionEl.innerHTML = questionNumber + '. ' + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerBtn.appendChild(button)
    });
}

startQuiz()

