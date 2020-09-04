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

const findWinner = (isWinner, $player, $boxes) => {

    if ($boxes[0].innerHTML !== '' && $boxes[0].innerHTML === $boxes[1].innerHTML && $boxes[0].innerHTML === $boxes[2].innerHTML) {
        return changeColor($boxes[0], $boxes[1], $boxes[2], isWinner, $player);
    }
    if ($boxes[3].innerHTML !== '' && $boxes[3].innerHTML === $boxes[4].innerHTML && $boxes[4].innerHTML === $boxes[5].innerHTML) {
        return changeColor($boxes[3], $boxes[4], $boxes[5], isWinner, $player);
    }
    if ($boxes[6].innerHTML !== '' && $boxes[6].innerHTML === $boxes[7].innerHTML && $boxes[6].innerHTML === $boxes[8].innerHTML) {
        return changeColor($boxes[6], $boxes[7], $boxes[8], isWinner, $player);
    }
    if ($boxes[0].innerHTML !== '' && $boxes[0].innerHTML === $boxes[3].innerHTML && $boxes[0].innerHTML === $boxes[6].innerHTML) {
        return changeColor($boxes[0], $boxes[3], $boxes[6], isWinner, $player);
    }
    if ($boxes[1].innerHTML !== '' && $boxes[1].innerHTML === $boxes[4].innerHTML && $boxes[1].innerHTML === $boxes[7].innerHTML) {
        return changeColor($boxes[1], $boxes[4], $boxes[7], isWinner, $player);
    }
    if ($boxes[2].innerHTML !== '' && $boxes[2].innerHTML === $boxes[5].innerHTML && $boxes[2].innerHTML === $boxes[8].innerHTML) {
        return changeColor($boxes[2], $boxes[5], $boxes[8], isWinner, $player);
    }
    if ($boxes[0].innerHTML !== '' && $boxes[0].innerHTML === $boxes[4].innerHTML && $boxes[0].innerHTML === $boxes[8].innerHTML) {
        return changeColor($boxes[0], $boxes[4], $boxes[8], isWinner, $player);
    }
    if ($boxes[2].innerHTML !== '' && $boxes[2].innerHTML === $boxes[4].innerHTML && $boxes[2].innerHTML === $boxes[6].innerHTML) {
        return changeColor($boxes[2], $boxes[4], $boxes[6], isWinner, $player);
    }
};

exports.playAgain = playAgain;
exports.changeColor = changeColor;
exports.findWinner = findWinner;