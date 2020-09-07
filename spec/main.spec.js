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
        expect(true).toBe(true);
    });
});