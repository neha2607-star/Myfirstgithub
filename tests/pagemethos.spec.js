import {test} from '@playwright/test'
import { time } from 'node:console';

//Page methods

test('page methods',async ({page}) => {
    
    /*page mehods : page methods are the function which are available  throughout the page object
that helps the automate user interactions , retrive informaion ,handle browser EVENTS, and manage state of web page
*/

    //1. page.goto():which will help to launch the application
    await page.goto('https://www.flipkart.com')

    //2.page.viwPortsize(): Tit is used to retuen the current view port size of web page
    let checviewportsize = await page.viewportSize();
    console.log(checviewportsize);
})


test('',async ({page}) => {

    // to open browser in custmize screen size
    await page.setViewportSize({height:300,width:300})  // it will launch browser in this screen size
    await page.goto('https://www.amezon.in/')
    console.log(await page.viewportSize());  //it will return latest wodth and height

    //page.title()  : it will retuen title of webpage
    let title = await page.title();
    console.log(title);

    //page.url()  : it will return the url of  web page 
    console.log(await page.url());

    //page.screenshot :   it will capture page screenshot and save in screen shot folder
    //screen shot method will override, so we will get 1 screen shot at a time even 3 browser there

    await page.screenshot({path:'screenshot//ss.png'})

    //to capture multiple screenshot

    let date = new Date().getTime();  //it will track time of each and every second 
    //because we  have to takr screenshot at different time as browser will open at different time

    await page.screenshot({path:'screenshot//page{date}.png'})
    
    
    
    

    
})