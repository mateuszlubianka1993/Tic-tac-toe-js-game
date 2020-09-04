const playAgain = ($boxes, $player, isWinner) => {

    for (let i = 0; i < $boxes.length; i++) {
        $boxes[i].innerHTML = '';
        $boxes[i].classList.remove('win-box');
    }
    $player.innerHTML = 'PLAY';
    return isWinner = false;
}

const changeColor = (box1, box2, box3, isWinner, $player) => {

    box1.classList.add('win-box');
    box2.classList.add('win-box');
    box3.classList.add('win-box');
    $player.innerHTML = box1.innerHTML + ' player won!';
    return isWinner = true;
};

const findWinner = (isWinner) => {

    const $box1 = document.getElementById('box1');
    const $box2 = document.getElementById('box2');
    const $box3 = document.getElementById('box3');
    const $box4 = document.getElementById('box4');
    const $box5 = document.getElementById('box5');
    const $box6 = document.getElementById('box6');
    const $box7 = document.getElementById('box7');
    const $box8 = document.getElementById('box8');
    const $box9 = document.getElementById('box9');
    const $player = document.getElementById('player');

    if ($box1.innerHTML !== '' && $box1.innerHTML === $box2.innerHTML && $box1.innerHTML === $box3.innerHTML) {
        return changeColor($box1, $box2, $box3, isWinner, $player);
    }
    if ($box4.innerHTML !== '' && $box4.innerHTML === $box5.innerHTML && $box4.innerHTML === $box6.innerHTML) {
        return changeColor($box4, $box5, $box6, isWinner, $player);
    }
    if ($box7.innerHTML !== '' && $box7.innerHTML === $box8.innerHTML && $box7.innerHTML === $box9.innerHTML) {
        return changeColor($box7, $box8, $box9, isWinner, $player);
    }
    if ($box1.innerHTML !== '' && $box1.innerHTML === $box4.innerHTML && $box1.innerHTML === $box7.innerHTML) {
        return changeColor($box1, $box4, $box7, isWinner, $player);
    }
    if ($box2.innerHTML !== '' && box2.innerHTML === $box5.innerHTML && $box2.innerHTML === $box8.innerHTML) {
        return changeColor($box2, $box5, $box8, isWinner, $player);
    }
    if ($box3.innerHTML !== '' && $box3.innerHTML === $box6.innerHTML && $box3.innerHTML === $box9.innerHTML) {
        return changeColor($box3, $box6, $box9, isWinner, $player);
    }
    if ($box1.innerHTML !== '' && $box1.innerHTML === $box5.innerHTML && $box1.innerHTML === $box9.innerHTML) {
        return changeColor($box1, $box5, $box9, isWinner, $player);
    }
    if ($box3.innerHTML !== '' && $box3.innerHTML === $box5.innerHTML && $box3.innerHTML === $box7.innerHTML) {
        return changeColor($box3, $box5, $box7, isWinner, $player);
    }
};

exports.playAgain = playAgain;
exports.changeColor = changeColor;
exports.findWinner = findWinner;