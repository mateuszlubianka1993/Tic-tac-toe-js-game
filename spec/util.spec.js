let { JSDOM } = require('jsdom');

const playAgain = require('../src/js/util').playAgain;

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