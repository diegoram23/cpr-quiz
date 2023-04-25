import { questions } from "/questions.js";


const questionEl = document.getElementById('question')
const answerBtn = document.getElementById('answer-buttons')
const nextBtn = document.getElementById('next-btn')
const result = document.getElementById('result')
const scoreboard = document.getElementById('scoreboard')
const mainContent = document.getElementById('quiz')
const againBtn = document.getElementById('again-btn')

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

    if (e.target.dataset.again) {
        
    }
})

againBtn.addEventListener('click', () => {
    location.reload()
})

// Handles button clicks
const handleAnswerClick = (id) => {
    const isCorrect = id.dataset.correct === 'true'

    // If user chooses correct answer
    if (isCorrect) {
        id.style.backgroundColor = '#00a36c'
        // Increments score
        score++
        handleScore()
        // Message displaying incorrect
        result.style.display = 'block'
        result.textContent = 'Correct!'
        result.style.color = '#00a36c'

        // If user chooses incorrect answer
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
    scoreboard.innerHTML = `Score: ${score} out of ${currentQuestionIndex + 1}`
}

// Advances to next question
const handleNextBtn = () => {
    // Hides result message
    result.style.display = 'none'
    nextBtn.style.display = 'none'
    currentQuestionIndex++

    // Calls for next quesion only if questions are remaining otherwise calls endgame
    currentQuestionIndex < questions.length ? getShowQuestionHtml() : endGame()
}

const endGame = () => {
    againBtn.style.display = 'block'
    mainContent.innerHTML = `
            <h2>Your final score is ${score} out of ${currentQuestionIndex}</h2>
            <button id="again-btn" data-again='again-btn'>Again</button>
    `
}

// Collects html for current question and possible answers
const getShowQuestionHtml = () => {
    let currentQuestion = questions[currentQuestionIndex]

    let questionNumber = currentQuestionIndex + 1
    questionEl.innerHTML = questionNumber + '. ' + currentQuestion.question

    let questionHtml = ''
    //loops through questions.answers data and creates html to later be called
    currentQuestion.answers.forEach(answer => {
        questionHtml += `
        <button class="btn" data-correct='${answer.correct}'>${answer.text}</button>
        `
        return questionHtml
    })
    
    document.getElementById('answer-buttons').innerHTML = questionHtml

}

// Starts quiz from the beginning with 0 score
const startQuiz = () => {
    score = 0
    currentQuestionIndex = 0
    getShowQuestionHtml()
}

//initializes the app
startQuiz()

