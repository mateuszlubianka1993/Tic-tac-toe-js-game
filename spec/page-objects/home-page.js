const puppeteer = require('puppeteer');

class HomePage {

    constructor() {
        this.url = 'http://localhost:9000/';
    }

    async open() {
        this.browser = await puppeteer.launch({
            headless: true,
            slowMo: 5
        });
        this.page = await this.browser.newPage();
        await this.page.goto(this.url);
    }

    async close() {
        await this.browser.close();
    }

    title() {
        return this.page.title();
    }

}

module.exports = {
    HomePage
};