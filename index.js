import { questions } from "/questions.js";


const questionEl = document.getElementById('question')
const answerBtn = document.getElementById('answer-buttons')
const nextBtn = document.getElementById('next-btn')
const result = document.getElementById('result')
const scoreboard = document.getElementById('scoreboard')

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
        // Increments score
        score++
        handleScore()
        // Message displaying incorrect
        result.style.display = 'block'
        result.textContent = 'Correct!'
        result.style.color = '#00a36c'

    } else {
        id.style.backgroundColor = '#ff2400'
        handleScore()
        // Message displaying incorrect
        result.style.display = 'block'
        result.textContent = 'Incorrect'
        result.style.color = '#ff2400'
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

const handleScore = () => {
    //Increments score by 1
   scoreboard.innerHTML = `Score: ${score} out of ${questions.length}`
}

// Advances to next question
const handleNextBtn = () => {
    // Hides result message
    result.style.display = 'none'
    currentQuestionIndex++
    getShowQuestionHtml()
}

// Collects html for current question and possible answers
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

// Starts quiz from the beginning with 0 score
const startQuiz = () => {
    score = 0
    currentQuestionIndex = 0
    getShowQuestionHtml()
}

//initializes the app
startQuiz()

