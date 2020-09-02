const playAgain = require('../src/js/util').playAgain;

describe("A playAgain function", function() {
    let isWinner;
    const $boxes = [];
    const $player = {};

    it("should change isWinner value to 'false'.", function() {
        isWinner = true;
        isWinner = playAgain($boxes, $player, isWinner);
        expect(isWinner).toBe(false);
    });
});