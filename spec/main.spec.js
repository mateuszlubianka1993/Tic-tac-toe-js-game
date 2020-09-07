const { HomePage } = require('./page-objects/home-page');

describe('Home Page ', () => {

    var originalTimeout;
    const page = new HomePage();

    beforeEach(async() => {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
        await page.open();
    });

    afterEach(async() => {
        await page.close();
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('should set correct title', async() => {
        expect(await page.title()).toBe('Tic-tac-toe-js');
    });

    it('should have proper title', async() => {
        expect(await page.getHeaderContent()).toEqual('Tic Tac Toe');
    });

    it('#player should has "Play" text at start', async() => {
        expect(await page.getElemContent('#player')).toEqual('PLAY');
    });
});

describe('main.js file ', () => {

    var originalTimeout;
    const page = new HomePage();

    beforeEach(async() => {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
        await page.open();
    });

    afterEach(async() => {
        await page.close();
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('should insert "X" to first clicked element.', async() => {
        await page.clickElem('#box1');

        expect(await page.getElemContent('#box1')).toEqual('X');
    });

    it('should insert "O" to second clicked element.', async() => {
        await page.clickElem('#box1');
        await page.clickElem('#box4');

        expect(await page.getElemContent('#box4')).toEqual('O');
    });

    it('should insert "O Player Turn" in #player elem after first user move.', async() => {
        await page.clickElem('#box1');

        expect(await page.getElemContent('#player')).toEqual('O Player Turn');
    });

    it('should insert "X Player Turn" in #player elem after second user move.', async() => {
        await page.clickElem('#box1');
        await page.clickElem('#box4');

        expect(await page.getElemContent('#player')).toEqual('X Player Turn');
    });

    it('should insert "X player won!" in #player when player X has 3 boxes in the line.', async() => {
        await page.clickElem('#box1');
        await page.clickElem('#box4');
        await page.clickElem('#box2');
        await page.clickElem('#box5');
        await page.clickElem('#box3');

        expect(await page.getElemContent('#player')).toEqual('X player won!');
    });

    it('should insert "O player won!" in #player when player O has 3 boxes in the line.', async() => {
        await page.clickElem('#box1');
        await page.clickElem('#box4');
        await page.clickElem('#box2');
        await page.clickElem('#box5');
        await page.clickElem('#box7');
        await page.clickElem('#box6');

        expect(await page.getElemContent('#player')).toEqual('O player won!');
    });

    it('should insert "PLAY" in #player after clicking on #play-again button.', async() => {
        await page.clickElem('#box1');
        await page.clickElem('#play-again');

        expect(await page.getElemContent('#player')).toEqual('PLAY');
    });

    it('should not insert anything when there is a winner.', async() => {
        await page.clickElem('#box1');
        await page.clickElem('#box4');
        await page.clickElem('#box2');
        await page.clickElem('#box5');
        await page.clickElem('#box7');
        await page.clickElem('#box6');
        await page.clickElem('#box8');

        expect(await page.getElemContent('#box8')).toEqual('');
    });
});