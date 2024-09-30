const questions = [
    {
        question: 'What is Jelissa’s favorite color?',
        options: ['Blue', 'Lilas', 'Green', 'Yellow'],
        answer: 'Lilas',
    },
    {
        question: 'What is her favorite food?',
        options: ['Pizza', 'Sushi', 'Burgers', 'Noodles'],
        answer: 'Noodles',
    },
    {
        question: 'What is Jelissa’s dream vacation spot?',
        options: ['USA', 'Maldives', 'South Africa', 'Japan'],
        answer: 'South Africa',
    },
    {
        question: 'What is Jelissa’s favorite movie genre?',
        options: ['Action', 'Romance', 'Horror', 'Comedy'],
        answer: 'Romance',
    },
    {
        question: 'What is Jelissa’s favorite hobby?',
        options: ['Reading', 'Dancing', 'Cooking', 'Painting'],
        answer: 'Reading',
    },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const questionCountElement = document.getElementById('question-count');
    const feedbackElement = document.getElementById('feedback');

    questionElement.innerText = questions[currentQuestion].question;
    optionsElement.innerHTML = '';

    questions[currentQuestion].options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => handleAnswer(option);
        optionsElement.appendChild(button);
    });

    questionCountElement.innerText = `Question ${currentQuestion + 1}/${questions.length}`;
    feedbackElement.innerText = '';
}

function handleAnswer(option) {
    const feedbackElement = document.getElementById('feedback');

    if (option === questions[currentQuestion].answer) {
        score++;
        feedbackElement.innerText = 'Correct!';
    } else {
        feedbackElement.innerText = `Wrong! Correct answer: ${questions[currentQuestion].answer}`;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        setTimeout(loadQuestion, 2000);
    } else {
        showResult();
    }
}

function showResult() {
    const quizElement = document.getElementById('quiz');
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');
    const loveLetterElement = document.getElementById('love-letter');

    quizElement.style.display = 'none';
    resultElement.style.display = 'block';
    scoreElement.innerText = `You got ${score} out of ${questions.length} correct!`;
    loveLetterElement.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', loadQuestion);
