import { questions } from "./questions.js";

// Variables
const questionEl = document.getElementById('question')
const answerBtn = document.getElementById('answer-buttons')
const nextBtn = document.getElementById('next-btn')
const result = document.getElementById('result')
const scoreboard = document.getElementById('scoreboard')
const mainContent = document.getElementById('quiz')
const againBtn = document.getElementById('again-btn')

// Initial scores and starting index of questions
let score = 0
let currentQuestionIndex = 0

// Document event listener
document.addEventListener('click', (e) => {
    // Listens for clickes on answers
    if (e.target.dataset.correct) {
        handleAnswerClick(e.target)
    }

    // Listens for clicks on next button
    if (e.target.dataset.next) {
        handleNextBtn()
    }
})

// Listens for clicks on try again button at end game
againBtn.addEventListener('click', () => {
    location.reload()
})

// Handles button clicks
const handleAnswerClick = (id) => {
    // Defines what a correct answer is
    const isCorrect = id.dataset.correct === 'true'

    // If user chooses correct answer
    if (isCorrect) {
        id.style.backgroundColor = '#00a36c'
        // Increments score and calls handle score function
        score++
        handleScore()
        // Message displaying correct
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

    // Converts answers object into array and loops over it 
    Array.from(answerBtn.children).forEach(button => {
        // Answers with dataset 'true' are highlighted green
        if (button.dataset.correct === 'true') {
            button.style.backgroundColor = '#00a36c'
        }
        // Prevents user from changing answer after click
        button.disabled = true
    })
}

// Displays current score after first click
const handleScore = () => {
    scoreboard.style.display = 'block'
    scoreboard.innerHTML = `Score: ${score} out of ${questions.length}`
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

    const percentScore = (score / currentQuestionIndex * 100)
    // If user gets 80% or greater correct then a nice job message appears
    if (percentScore >= 80) {
        againBtn.style.display = 'block'
        mainContent.innerHTML = `
            <h2>Your final score is ${score} out of ${currentQuestionIndex} nice job!</h2>
    `
    // Else user gets a recommendation message to brush up on skills by visiting american cross association website
    } else {
        againBtn.style.display = 'block'
        mainContent.innerHTML = `
                <h2>Your final score is ${score} out of ${currentQuestionIndex}</h2>
                <p>We recommend brushing up on your CPR knowledge. Here is a link to the <a href='https://cpr.heart.org/en/resources/what-is-cpr' target='_blank'>American Heart Assosication CPR page<a/></p>
        `
    }
}

// Collects html for current question and possible answers
const getShowQuestionHtml = () => {
    let currentQuestion = questions[currentQuestionIndex]
    let questionNumber = currentQuestionIndex + 1
    // Html for question element
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

// Starts quiz from the beginning with 0 score and calls get question html function
const startQuiz = () => {
    score = 0
    currentQuestionIndex = 0
    getShowQuestionHtml()
}

//initializes the app
startQuiz()

