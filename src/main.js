import {game} from './game';

const newGameButtonElement =  document.getElementById("new-game");
const inputElement = document.getElementById("word");

newGameButtonElement.addEventListener('click', function (){
    game.newGame();

    const squares = document.querySelectorAll('.square');

    for (let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = game.letters[i].toUpperCase();
    }

});

inputElement.disabled = false;
inputElement.focus();

inputElement.addEventListener('keypress', function (){
    
});