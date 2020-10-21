let names = [];
let boardLeader = {

}

let start = document.getElementById('');
let go = document.getElementById('go');
let palyerName = document.getElementById('playerName');

let saveName = document.getElementById('myName');
if(palyerName.value == '') {
    go.style.display = 'none'
}

saveName.addEventListener('click', () => {
    if(palyerName.value != ''){
        alert(`Welcome to you ${palyerName.value}`);
        localStorage.setItem('name', palyerName.value);

        go.style.display = 'block' ;
        
    } else{
        alert('Enter your name. Please.');
    }
})


  


names.push(name);
