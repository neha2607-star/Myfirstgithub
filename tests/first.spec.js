// let {chromium} = require('playwright');

// (async () => {
//     let browser = await chromium.launch({ headless: false });
//     let context = await browser.newContext();
//     let page = await context.newPage();

//     await page.goto('https://www.google.com');

//     await browser.close();
// })();

//launch firefox  "task1 " - flipcat app need to open


// ==============syntax====================

// (() => {
//     console.log("This is an Arrow Function IIFE");
// })();




import{test} from '@playwright/test'

// test('first test',async()=>
// {
//     console.log("first playwright test");
// })


// test('page fixture', ({page}) => {
    
//      page.goto('https://www.google.com');

//      page.goto('https://www.zepto.com');

// })