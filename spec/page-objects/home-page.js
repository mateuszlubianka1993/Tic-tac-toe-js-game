const puppeteer = require('puppeteer');

class HomePage {

    constructor() {
        this.url = 'http://localhost:9000/';
    }

    async open() {
        this.browser = await puppeteer.launch({
            headless: true
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

    getHeaderContent() {
        return this.page.$eval('h1', ($el) => $el.textContent);
    }

    getElemContent(elem) {
        return this.page.$eval(elem, ($el) => $el.textContent);
    }

    clickElem(elem) {
        this.page.$eval(elem, el => el.click());
    }
}

module.exports = {
    HomePage
};