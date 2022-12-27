let chance = document.getElementById('chance')
let play = document.getElementById('play')
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissor = document.getElementById('scissor')
let userPoint = document.getElementById('user-point')
let computerPoint = document.getElementById('computer-point')
let turnLeft = document.getElementById('turn-left')
let result = document.getElementById('result')
let finalResult = document.getElementById('finalResult')
var turn = 0;
rock.disabled = true;
paper.disabled = true;
scissor.disabled = true;
let up = 0;
let cp = 0;
play.addEventListener('click',playButton);
rock.addEventListener('click',gamePlay);
paper.addEventListener('click',gamePlay);
scissor.addEventListener('click',gamePlay);
window.choices = ['rock','paper','scissor'];
function playButton(e){
    turn = chance.value;
    turnLeft.innerText = `Turn left = ${turn}`;
    if(chance.value<1){
       alert('Please enter a valid number');
    }else{
        rock.disabled = false;
        paper.disabled = false;
        scissor.disabled = false;
    }
}

function gamePlay(e){
    
    if(turn<=1){
        turnLeft.innerText = `Turn left = 0`;
        let compChoice = choices[Math.floor(Math.random()*3)];
        let userChoice = e.target.innerText;
        console.log('compchoice =',compChoice);
        console.log('user choice = ',userChoice);
        if(userChoice==compChoice){
           result.innerText = 'Draw';
        }else if(compChoice=='rock' && userChoice=='scissor' || compChoice=='scissor' && userChoice=='paper' || compChoice=='paper' && userChoice=='rock'){
         result.innerText = 'Computer Won';
         ++cp;
         computerPoint.innerText = `Computers point : ${cp}`;
        }else{
         result.innerText = 'user Won';
         ++up;
         userPoint.innerText = `User points : ${up}`;;
        }
        if(cp>up){
            finalResult.innerText = 'Computer Won';
        }else if(up>cp){
            finalResult.innerText = 'user Won'; 
        }else{
            finalResult.innerText = 'Draw';
        }
    }else{
        
        let compChoice = choices[Math.floor(Math.random()*3)];
        let userChoice = e.target.innerText;
        console.log('compchoice =',compChoice);
        console.log('user choice = ',userChoice);
        if(userChoice==compChoice){
           result.innerText = 'Draw';
        }else if(compChoice=='rock' && userChoice=='scissor' || compChoice=='scissor' && userChoice=='paper' || compChoice=='paper' && userChoice=='rock'){
         result.innerText = 'Computer Won';
         ++cp;
         computerPoint.innerText = `Computers point : ${cp}`;
        }else{
         result.innerText = 'user Won';
         ++up;
         userPoint.innerText = `User points : ${up}`;;
        }
    }
    --turn;
    if(turn>0){
        turnLeft.innerText = `Turn left = ${turn}`;
    }

}


