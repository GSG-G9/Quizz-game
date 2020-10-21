let btn = document.getElementById('back-home');
let ourList = document.getElementById('list');
let first = document.getElementById('first');
let second = document.getElementById('two');
let third = document.getElementById('three');


let playerNmae = localStorage.getItem('name');
let score = localStorage.getItem('Score');


ourList.innerText = `Player name: ${playerNmae}  \n Score: ${score}`

console.log({
    palyerName : playerNmae,
    Score : score
});

btn.addEventListener('click', () => {
    window.location ='home.html'
})