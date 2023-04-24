import { questions } from "/questions.js";


const questionEl = document.getElementById('question')
const answerBtn = document.getElementById('answer-buttons')
const nextBtn = document.getElementById('next-btn')

let score = 0
let currentQuestionIndex = 0

document.addEventListener('click', (e) => {
    if (e.target) {
        handleAnswerClick(e.target)
    }
})

const handleAnswerClick = (id) => {

    const isCorrect = id.dataset.correct === 'true'
    const isFalse = id.dataset.correct === 'false'

    if (isCorrect) {
        id.style.backgroundColor = '#00a36c'
        console.log('yes')
    } if (isFalse) {
        id.style.backgroundColor = '#ff3131'
        console.log('no')
    }
}

const startQuiz = () => {
    currentQuestionIndex = 0
    score = 0
    nextBtn.innerHTML = 'Next'
    getShowQuestionHtml()
}

const getShowQuestionHtml = () => {
    let questionHtml = ''

    let currentQuestion = questions[currentQuestionIndex]
    let questionNumber = currentQuestionIndex + 1
    questionEl.innerHTML = questionNumber + '. ' + currentQuestion.question

    //loops through questions.answers data and creates html to later be called
    currentQuestion.answers.forEach(answer => {
        questionHtml += `
        <button class="btn" data-correct='${answer.correct}'>${answer.text}</button>
        `
    })


    return questionHtml
}

//call and renders possible answers to question displayed
document.getElementById('answer-buttons').innerHTML = getShowQuestionHtml()

//initializes the app
startQuiz()

