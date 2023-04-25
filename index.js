import { questions } from "/questions.js";


const questionEl = document.getElementById('question')
const answerBtn = document.getElementById('answer-buttons')
const nextBtn = document.getElementById('next-btn')

let score = 0
let currentQuestionIndex = 0

// Document event listener
document.addEventListener('click', (e) => {
    if (e.target.dataset.correct) {
        handleAnswerClick(e.target)
    }

    if (e.target.dataset.next) {
        handleNextBtn()
    }
})



// Handles button clicks
const handleAnswerClick = (id) => {
    const isCorrect = id.dataset.correct === 'true'

    // Changes background color if answer choosen
    if (isCorrect) {
        id.style.backgroundColor = '#00a36c'
        score++
    } else {
        id.style.backgroundColor = '#ff2400'
    }

    // Next button appears after first answer click
    nextBtn.style.display = 'block'

    // Loops over answers and reveals the correct answer after user chooses an aswer
    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.style.backgroundColor = '#00a36c'
        }
        // Prevents user from changing answer
        button.disabled = true
    })
}

const handleNextBtn = () => {
    currentQuestionIndex++
    getShowQuestionHtml()
    console.log(currentQuestionIndex, 'here')
}

const startQuiz = () => {
    score = 0
    currentQuestionIndex = 0
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
        
        document.getElementById('answer-buttons').innerHTML = questionHtml
    })
}
//initializes the app
startQuiz()

