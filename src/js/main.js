const playAgain = require('./util').playAgain;
const findWinner = require('./util').findWinner;

document.addEventListener('DOMContentLoaded', function() {

    const $player = document.getElementById('player');
    const $boxes = document.querySelectorAll('#big-box div');
    let isWinner = false;
    let ticTac = 0;

    for (let i = 0; i < $boxes.length; i++) {
        $boxes[i].onclick = function() {
            if (this.innerHTML !== 'X' && this.innerHTML !== 'O' && !isWinner) {
                if (ticTac % 2 === 0) {

                    this.innerHTML = 'X';
                    $player.innerHTML = 'O Player Turn';
                    findWinner(isWinner);
                    ticTac += 1;
                } else {

                    this.innerHTML = 'O';
                    $player.innerHTML = 'X Player Turn';
                    findWinner(isWinner);
                    ticTac += 1;
                }
            }
        }
    }

    // Play Again function
    const $button = document.getElementById('play-again');
    $button.addEventListener('click', function() {
        playAgain($boxes, $player, isWinner);
    });
});