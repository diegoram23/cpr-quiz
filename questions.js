const questions = [
    {
        question: 'Where should you place the AED pads when treating an infant for pediatric cardiac arrest?',
        answers: [
            { text: 'Chest and back', correct: true },
            { text: 'Do not use an AED on an infant', correct: false },
            { text: 'Upper chest and mid abdomen', correct: false },
            { text: 'Wherever they fit', correct: false },
        ]
    },
    {
        question: 'How long should you check for breathing before performing CPR?',
        answers: [
            { text: 'Do not check for breathing, start chest compressions right away', correct: false },
            { text: '2 seconds', correct: false },
            { text: '5-10 seconds', correct: true },
            { text: '15 seconds', correct: false },
        ]
    },
    {
        question: 'For adult CPR, at what depth should chest compressions be given at?',
        answers: [
            { text: '1 inch', correct: false },
            { text: 'At least 2 inches', correct: true },
            { text: '1-2 inches', correct: false },
            { text: '2-3 inches', correct: false },
        ]
    },
    {
        question: 'You are the first rescuer to arrive at the scene. What is the first step to do?',
        answers: [
            { text: 'Tap the victims shoulder for responsiveness', correct: false },
            { text: 'Make sure the scene is safe', correct: true },
            { text: 'Attach the AED pads', correct: false },
            { text: 'Check for breathing', correct: false },
        ]
    },
    {
        question: 'You suspect a head/neck injury in a victim who is unresponsive and not breathing. How would you open the airway to give breaths?',
        answers: [
            { text: 'Jaw-thrust technique', correct: true },
            { text: 'Head tilt-chin lift', correct: false },
            { text: 'Thumb and index lift', correct: false },
            { text: 'E-C clamp technique', correct: false },
        ]
    },
    {
        question: 'During 2 rescuer CPR on an adult victim waht is the compression and breath ratio?',
        answers: [
            { text: '15:2', correct: false },
            { text: '30:1', correct: false },
            { text: '15:1', correct: false },
            { text: '30:2', correct: true },
        ]
    },
     {
        question: 'You are using an AED. Before pressing the shock button as indicated by the AED you would do the following?',
        answers: [
            { text: 'Shout clear and look to make sure no one is in contact with the victim', correct: true },
            { text: 'Shout clear and then press the shock button', correct: false },
            { text: 'Make sure chest compressions are not interrupted', correct: false },
            { text: 'Continue with CPR', correct: false },
        ]
    },
    {
        question: 'What is the rate of compressions when delivering CPR?',
        answers: [
            { text: '40 compressions per minute', correct: false },
            { text: '60-80 compressions per minute', correct: false },
            { text: '80-100 compressions per minute', correct: false },
            { text: '100-120 compressions per minute', correct: true },
        ]
    },
    {
        question: 'What should you do first when operating an AED?',
        answers: [
            { text: 'Turn the AED on', correct: true },
            { text: 'Attach the pads to the victims chest', correct: false },
            { text: 'Perform at least two cycles of CPR first', correct: false },
            { text: 'Check to see if the patient has a pulse', correct: false },
        ]
    }

]


export default questions