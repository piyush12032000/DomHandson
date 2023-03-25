let by = document.getElementById('body1');
let randomNumber = Math.floor(Math.random()*100);
let b = document.getElementsByTagName('b');
let qsn = document.getElementById('ques');
let inpt = document.getElementById('input');
let chc = document.getElementById('check');
let para = document.getElementById('guess');
let play =document.getElementById('plybut')
let cnt = 100;
chc.addEventListener('click', () => {
    
    if(randomNumber < parseInt(inpt.value)){
        para.innerText = "Guess is High";
        cnt --;
        b[1].innerHTML = cnt;
    }else if(randomNumber > parseInt(inpt.value)){
        para.innerText = "Guess is Low";
        cnt --;
        b[1].innerHTML = cnt;
    }else{
        para.innerText = "Correct Guess You Won..!";
        cnt --;
        qsn.innerText = randomNumber;
        b[2].innerText = cnt;
        by.setAttribute('style', 'background-color:green');
    }
})