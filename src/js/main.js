document.addEventListener('DOMContentLoaded', function() {

    const $boxes = document.querySelectorAll('#big-box div');
    let ticTac = 0;

    for (let i = 0; i < $boxes.length; i++) {
        $boxes[i].onclick = function() {
            if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
                if (ticTac % 2 === 0) {

                    this.innerHTML = 'X';
                    $player.innerHTML = 'O Player Turn';
                    findWinner();
                    ticTac += 1;
                } else {

                    this.innerHTML = 'O';
                    $player.innerHTML = 'X Player Turn';
                    findWinner();
                    ticTac += 1;
                }
            }
        }
    }

    // Play Again function
    const $button = document.getElementById('play-again');
    $button.addEventListener('click', function() {
        for (let i = 0; i < $boxes.length; i++) {
            $boxes[i].innerHTML = '';
            $boxes[i].classList.remove('win-box');
        }
        $player.innerHTML = 'PLAY';
    });

});

const $player = document.getElementById('player');

const findWinner = () => {

    const $box1 = document.getElementById('box1');
    const $box2 = document.getElementById('box2');
    const $box3 = document.getElementById('box3');
    const $box4 = document.getElementById('box4');
    const $box5 = document.getElementById('box5');
    const $box6 = document.getElementById('box6');
    const $box7 = document.getElementById('box7');
    const $box8 = document.getElementById('box8');
    const $box9 = document.getElementById('box9');


    if ($box1.innerHTML !== '' && $box1.innerHTML === $box2.innerHTML && $box1.innerHTML === $box3.innerHTML) {
        changeColor($box1, $box2, $box3);
    }
    if ($box4.innerHTML !== '' && $box4.innerHTML === $box5.innerHTML && $box4.innerHTML === $box6.innerHTML) {
        changeColor($box4, $box5, $box6);
    }
    if ($box7.innerHTML !== '' && $box7.innerHTML === $box8.innerHTML && $box7.innerHTML === $box9.innerHTML) {
        changeColor($box7, $box8, $box9);
    }
    if ($box1.innerHTML !== '' && $box1.innerHTML === $box4.innerHTML && $box1.innerHTML === $box7.innerHTML) {
        changeColor($box1, $box4, $box7);
    }
    if ($box2.innerHTML !== '' && box2.innerHTML === $box5.innerHTML && $box2.innerHTML === $box8.innerHTML) {
        changeColor($box2, $box5, $box8);
    }
    if ($box3.innerHTML !== '' && $box3.innerHTML === $box6.innerHTML && $box3.innerHTML === $box9.innerHTML) {
        changeColor($box3, $box6, $box9);
    }
    if ($box1.innerHTML !== '' && $box1.innerHTML === $box5.innerHTML && $box1.innerHTML === $box9.innerHTML) {
        changeColor($box1, $box5, $box9);
    }
    if ($box3.innerHTML !== '' && $box3.innerHTML === $box5.innerHTML && $box3.innerHTML === $box7.innerHTML) {
        changeColor($box3, $box5, $box7);
    }

};

const changeColor = (box1, box2, box3) => {
    box1.classList.add('win-box');
    box2.classList.add('win-box');
    box3.classList.add('win-box');
    $player.innerHTML = box1.innerHTML + ' player won!';
};