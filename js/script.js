const buttonTest = document.getElementById('button-test');
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');


function buttonClicked(argPlayerMove) {
    clearMessages();
    console.log(argPlayerMove + ' został kliknięty');

    function printMessage(msg){
        var div = document.createElement('div');
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
    };

    function clearMessages(){
        document.getElementById('messages').innerHTML = '';
    };

    const playerMove = getMoveName(argPlayerMove);
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);

    function getMoveName(argMoveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
            return 'kamień';
        }
    };
    
    function displayResult(playerMove, computerMove) {
        console.log('wywołano funkcję displayResults z argumentami: ' + playerMove + ', ' + computerMove);
        if (playerMove == 'papier' && computerMove == 'kamień') {
            printMessage('Wygrywasz!');
        } else if (playerMove == 'nożyce' && computerMove == 'papier') {
            printMessage('Wygrywasz!');
        } else if (playerMove == 'kamień' && computerMove == 'nożyce') {
            printMessage('Wygrywasz!');
        } else if (playerMove == computerMove) {
            printMessage('Remis..');
        } else {
            printMessage('Przegrywasz :(');
        }
        printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
    };

    displayResult(playerMove, computerMove);
}

buttonTest.addEventListener('click', function(){ buttonClicked('TEST');});
buttonRock.addEventListener('click', function(){ buttonClicked(1);});
buttonPaper.addEventListener('click', function(){ buttonClicked(2);});
buttonScissors.addEventListener('click', function(){ buttonClicked(3);});