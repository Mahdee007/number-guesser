let low = 1;
let high = 10;

let winningNumber = getRandomNumber();
let guessesLeft = 3;

function getRandomNumber(){
    return(Math.floor(Math.random()*(high-low + 1)+ low ));    
}

const gameDOM = document.querySelector('#main-game');
const guessLeftDOM = document.querySelector('.guess-left');
const btnDOM = document.querySelector('#submitjs');
const inputDOM = document.querySelector('#inputjs');
const msgDOM = document.querySelector('#text-area');

btnDOM.addEventListener('click', guessTheNumber );

guessLeftDOM.textContent = guessesLeft;

function guessTheNumber(e){
    let guess = parseInt(inputDOM.value);

    if(isNaN(guess) || guess < low || guess > high){
        setMsg('Enter a number between 1 to 10', 'red');
    } else if(guess === winningNumber){
        inputDOM.placeholder = 'Correct';
        inputDOM.disabled = true;
        setMsg(`Congrats! You win. Your guess is correct. ${winningNumber} is the correct number.`, 'green')
        btnDOM.disabled = true;
        playAgain();
    } else{
        guessesLeft -= 1;
        if(guessesLeft === 0){
            inputDOM.disabled = true;
            setMsg(`Sorry you lose. Correct Number is ${winningNumber}`, 'red');
            btnDOM.disabled = true;
            playAgain();
        } else {
            setMsg(`Wrong guess, try again`, 'red');
        }

    }



    e.preventDefault();
}

function setMsg(msg, bground){
    inputDOM.value = '';
    inputDOM.style.borderColor = bground;
    msgDOM.style.background = bground;
    msgDOM.style.color = 'white';
    msgDOM.textContent = msg;
    guessLeftDOM.textContent = guessesLeft;
    inputDOM.focus();
}


function playAgain(){
    let playAgainBTN = `
    <button class ="btn btn-primary form-control" id ="play-again">Play Again!</button>
    `;

    gameDOM.insertAdjacentHTML("beforeend", playAgainBTN);

    const playAgainDOM = gameDOM.querySelector('#play-again');
    
    playAgainDOM.addEventListener('click', resetGame);
    

}



function resetGame(e){
    window.location.reload();
}