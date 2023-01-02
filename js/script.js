var argButtonName, buttonTest,  buttonRock,  buttonPaper,  buttonScissors;

buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');


function buttonClicked(playerMove) {
  clearMessages();
  console.log(playerMove + ' został kliknięty');

    function printMessage(msg){
        var div = document.createElement('div');
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
    };

    function clearMessages(){
        document.getElementById('messages').innerHTML = '';
    };

    var argComputerMove, computerMove, playerMove, randomNumber;

    playerMove = getMoveName(playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    argComputerMove = randomNumber;
    computerMove = getMoveName(argComputerMove);

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