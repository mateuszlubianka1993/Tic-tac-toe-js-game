let { JSDOM } = require('jsdom');

const playAgain = require('../src/js/util').playAgain;
const changeColor = require('../src/js/util').changeColor;
const findWinner = require('../src/js/util').findWinner;

describe("A playAgain function", function() {
    let isWinner;
    let browser;

    beforeEach(done => {
        JSDOM.fromFile('./dist/index.html', {

        }).then(res => {
            browser = res;

            done();
        })
    })

    afterEach(() => {
        browser.window.close();
    })

    it("should change isWinner value to 'false'.", function() {
        isWinner = true;
        const $boxes = browser.window.document.querySelectorAll('#big-box div');
        const $player = browser.window.document.getElementById('player');

        isWinner = playAgain($boxes, $player, isWinner);
        expect(isWinner).toBe(false);
    });

    it("should change #player text to 'PLAY'.", function() {
        isWinner = true;
        const $boxes = browser.window.document.querySelectorAll('#big-box div');
        const $player = browser.window.document.getElementById('player');

        isWinner = playAgain($boxes, $player, isWinner);
        const result = $player.innerHTML;
        expect(result).toBe('PLAY');
    });

    it("should change every .small-box text to ''.", function() {
        isWinner = true;
        const $boxes = browser.window.document.querySelectorAll('#big-box div');
        const $player = browser.window.document.getElementById('player');

        isWinner = playAgain($boxes, $player, isWinner);
        const result = [];
        for (let i = 0; i < $boxes.length; i++) {
            if ($boxes[i].innerHTML == '') {
                result.push($boxes[i]);
            }
        }
        expect(result.length).toBe($boxes.length);
    });
});

describe("A changeColor function", function() {
    let isWinner;
    let browser;

    beforeEach(done => {
        JSDOM.fromFile('./dist/index.html', {

        }).then(res => {
            browser = res;

            done();
        })
    })

    afterEach(() => {
        browser.window.close();
    })

    it("should change isWinner value to 'true'.", function() {
        isWinner = false;
        const $box1 = browser.window.document.getElementById('box1');
        const $box2 = browser.window.document.getElementById('box2');
        const $box3 = browser.window.document.getElementById('box3');
        const $player = browser.window.document.getElementById('player');

        isWinner = changeColor($box1, $box2, $box3, isWinner, $player);
        expect(isWinner).toBe(true);
    });

    it("should change #player text to box1.innerHTML + ' player won!'.", function() {
        isWinner = false;
        const $box1 = browser.window.document.getElementById('box1');
        const $box2 = browser.window.document.getElementById('box2');
        const $box3 = browser.window.document.getElementById('box3');
        const $player = browser.window.document.getElementById('player');

        changeColor($box1, $box2, $box3, isWinner, $player);
        expect($player.innerHTML).toBe($box1.innerHTML + ' player won!');
    });

    it("should add 'win-box' class to $box1, $box2, $box3.", function() {
        isWinner = false;
        const $box1 = browser.window.document.getElementById('box1');
        const $box2 = browser.window.document.getElementById('box2');
        const $box3 = browser.window.document.getElementById('box3');
        const $player = browser.window.document.getElementById('player');

        changeColor($box1, $box2, $box3, isWinner, $player);
        const result = ($box1.classList.contains('win-box') && $box2.classList.contains('win-box') && $box3.classList.contains('win-box')) ? true : false;
        expect(result).toBe(true);
    });
});

describe("A findWinner function", function() {
    let isWinner;
    let browser;

    beforeEach(done => {
        JSDOM.fromFile('./dist/index.html', {

        }).then(res => {
            browser = res;

            done();
        })
    })

    afterEach(() => {
        browser.window.close();
    })

    it("should return the value 'true' from the function changeColor when the 3 squares forming the line and have the same value.", function() {
        isWinner = false;
        const $player = browser.window.document.getElementById('player');
        const $boxes = browser.window.document.querySelectorAll('#big-box div');

        $boxes[0].innerHTML = 'X';
        $boxes[1].innerHTML = 'X';
        $boxes[2].innerHTML = 'X';

        const result = findWinner(isWinner, $player, $boxes);
        expect(result).toBe(true);
    });

    it("should return the value 'undefined' from the function changeColor when the 3 squares forming the line do not have the same value.", function() {
        isWinner = false;
        const $player = browser.window.document.getElementById('player');
        const $boxes = browser.window.document.querySelectorAll('#big-box div');

        $boxes[0].innerHTML = 'X';
        $boxes[1].innerHTML = 'O';
        $boxes[2].innerHTML = 'X';

        const result = findWinner(isWinner, $player, $boxes);
        expect(result).toBe(undefined);
    });
});