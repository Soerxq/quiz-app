const questionEl = document.querySelector('.question');
const answersEl = document.querySelector('.answers');

const questions = [
    { text: "че-то", options: [1, 2, 3, 4], trueIndex: 3 },
    { text: "че-то2", options: [5, 6, 7, 8], trueIndex: 2 }
];

questionEl.textContent = questions[0].text;