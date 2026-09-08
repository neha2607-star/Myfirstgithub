import {test} from '@playwright/test'

//page fixture

test('page fixture',async ({page}) => {
    
    await page.goto('https://www.google.com');

    await page.goto('https://www.zepto.com');

})

//context fixture 

test('contaxt fixture',async ({context}) => {
    
    let page = await context.newPage();
    await page.goto('https://www.google.com');

    let page1 = await context.newPage();
    await page1.goto('https://www.zepto.com');

})

//browser fixture

test('browser fixture',async ({browser}) => {
    
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://www.google.com');

    let context1 = await browser.newContext();
    let page2= await context1.newPage();
    await page2.goto('https://www.swiggy.com');

})

