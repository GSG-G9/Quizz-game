
let questions = [
    {
        id : 1,
        qustion: 'how are you',
        correctAns : 'Good' 
    },
    {
        id : 2,
        qustion: 'how many fingers do humans have',
        correctAns : 8 
    },
    {
        id : 3,
        qustion: 'how many fingers do cats have',
        correctAns : 8 
    },
    {
        id : 4,
        qustion: 'how many fingers do dogs have',
        correctAns : 8
    },
    {
        id : 5,
        qustion: 'how many fingers do monkies have',
        correctAns : 8 
    },
    {
        id : 6,
        qustion: 'how many fingers do spong-pop have',
        correctAns : 8 
    },
    {
        id : 7,
        qustion: 'how many fingers do simpsons have',
        correctAns : 8
    },
    {
        id : 8,
        qustion: 'how many fingers do frogs have',
        correctAns : 8 
    },
    {
        id : 9,
        qustion: 'how many fingers do pandas have',
        correctAns : 6 
    },
    {
        id : 10,
        qustion: 'how many fingers do hamsters have',
        correctAns : 6 
    },
    {
        id : 11,
        qustion: ' Is cereal soup? ',
        correctAns : 'NO' 
    },
    {
        id : 12,
        qustion: 'What is the national sport of Japan?',
        correctAns : 'gg' 
    },
    {
        id : 13,
        qustion: 'What national team won the first ever football World Cup in 1930?',
        correctAns : 'xc' 
    },
    {
        id : 14,
        qustion: 'What is a baby elephant called',
        correctAns : 'f' 
    },
    {
        id : 15,
        qustion: 'What is the capital of Australia?',
        correctAns : 's' 
    },
    {
        id : 16,
        qustion: 'What is the capital of Brazil',
        correctAns : 'f' 
    },
    {
        id : 17,
        qustion: 'What is the capital of Denemark',
        correctAns : 'f' 
    },
    {
        id : 18,
        qustion: 'What is the capital of South-africa',
        correctAns : 'f' 
    },
    {
        id : 19,
        qustion: 'What is the capital of sweden',
        correctAns : 'f' 
    },
    {
        id : 20,
        qustion: 'What is the capital of Finland',
        correctAns : 'f' 
    },
    {
        id : 21,
        qustion: 'What is the longest river in the world?',
        correctAns : 'f' 
    },
    {
        id : 22,
        qustion: 'What is the largest city in the world by population?',
        correctAns : 'f' 
    },
    {
        id : 23,
        qustion: 'If you have cryophobia, what are you afraid of?',
        correctAns : 'f' 
    },
    {
        id : 24,
        qustion: 'How many permanent teeth does a dog have',
        correctAns : 'f' 
    },
    {
        id : 25,
        qustion: 'A screwdriver cocktail is orange juice, ice and which spirit?',
        correctAns : 'f' 
    },
    {
        id : 26,
        qustion: 'How many notes are there in a musical scale',
        correctAns : 'f' 
    },
    {
        id : 27,
        qustion: 'What language is spoken in Norway?',
        correctAns : 'f' 
    },
    {
        id : 28,
        qustion: 'Who played Gunther in Friends?',
        correctAns : 'f' 
    },
    {
        id : 29,
        qustion: 'How many keys are there on a piano?',
        correctAns : 'f' 
    },
    {
        id : 30,
        qustion: 'Which planet has the most moons?',
        correctAns : 'f' 
    },
];


let form = document.querySelector('#form');
let  question = document.getElementById('question');
let answer = document.getElementById('answer');
let nextPage = document.getElementById('next-page-btn');
let questionNumber = document.getElementById('numOfQuestion');

let score = 0;
let pageNum = 0;


console.log(questionNumber.innerText);

if(questionNumber.innerText = '0/10'){
    answer.style.display = 'none';
    nextPage.style.display = 'block';
} 



answer.addEventListener('input', (e) => {

    nextPage.style.display = 'block';
})


nextPage.addEventListener('click', () => {
    let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    if(randomQuestion.correctAns == answer.value) {
        score += 1;
        console.log(score);
    }
    pageNum+= 1;
    questionNumber.innerText = `${pageNum}/10`; 
    answer.style.display = 'block';
    nextPage.style.display = 'none';
    answer.value = '';
    if(pageNum > 10){
        alert(`Done. Your Score is ${score}`);
        localStorage.setItem('Score', score);
        document.removeChild(document.documentElement);
       window.location='leaderboard.html';

 
    };


     return  question.innerText =  randomQuestion.qustion;
});




console.log(pageNum);
console.log(score)