import {test} from "@playwright/test";


/*
open any website 
set the viewportSize
print the title
print the url
take the screenhot(1)
*/

test('task1',async ({page}) => {
    await page.goto('https://www.blinkit.com');
    await page.setViewportSize({width:400,height:400});
    console.log(await page.title());
    console.log(await page.url());
    await page.screenshot({path:'screenshot/ss.png'});
    
})


//Task 2

/*
open any website
set the viewport size
print the viewportsize
print the title
take the screenshot(3)
*/ 

test('task 2',async ({page}) => {

    await page.goto('https://www.facebook.com');
    await page.setViewportSize({width:350,height:350});
    let seeport = await page.viewportSize();
    console.log(seeport);
    console.log(await page.title());
    await page.screenshot({path:'screenshot/{date}.png'});
    
        
})


/*Launch 2 tabs in one browser Jun 19, 7:48 AM
And launch the applications in 2 tabs Jun 19, 7:48 AM
Print the title of the applications Jun 19, 7:48 AM
This task has to be in one test block Jun 19, 7:49 AM*/

test('task3',async (context) => {

    let pageA = await context.newPage();
    await pageA.goto('https://www.blinkit.com');
    console.log(await pageA.title());

    let pageB = await context.newPage();
    await pageB.goto('https://www.zepto.com');
    console.log(await pageB.title());
    
})


/*In that test block launch applications
 in different browsers and print title url and set the viewport size of the web pages*/

 test('task4',async ({browser}) => {
    
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://www.amezon.in/')
    console.log(await page.title());
    console.log(await page.url());
    await page.setViewportSize({height:350,width:350});

    let context1 = await browser.newContext();
    let page1 = await context1.newPage();
    await page1.goto('https://www.flipkart.com/')
    console.log(await page1.title());
    console.log(await page1.url());
    await page1.setViewportSize({height:350,width:350});
    
 })