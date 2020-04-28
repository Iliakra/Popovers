/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import puppeteer from 'puppeteer';
const {fork} = require('child_process');

jest.setTimeout(30000);
describe('click to button', () => {
    let browser = null;
    let page = null;
    let server = null;
    const baseUrl = 'http://localhost:9000';
    beforeAll(async () => {
        server = fork(`${__dirname}/e2e-popups.server.js`);
        await new Promise((resolve, reject) => {
            server.on('error', () => {
                reject();
            });
            server.on('message', (message) => {
                if (message === 'ok') {
                    resolve();
                }
            });
        });        
        browser = await puppeteer.launch(
             {
                headless: false,
                 slowMo: 100,
                devtools: true,
             }
        );
        page = await browser.newPage();
    });
    afterAll(async () => {
        await browser.close();
        server.kill();
    });
 test('should appear a hint with selector .error-hint' , async () => {
        await page.goto(baseUrl);
        const buttonContainer = await page.$('.button-container');
        const button = await page.$('.button');
        button.click();
        const hint = await page.$('.error-hint');
    });
});
