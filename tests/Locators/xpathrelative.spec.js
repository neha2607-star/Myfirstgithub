import {test} from '@playwright/test'

test('relativexpath',async ({page}) => {




    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')

    //relative xpath by (//)

    //here syntax  :  
    //    1.//tag[@attribute=attributevalue]

        await page.goto('//input[@name="name"]');


    //throught text function

    //     2. //tagname[text()='value']


    //throught contains

    //    3.//tag[contains(text()='value')]

    //if here 3 or 4 results coming , use indexing ....like  //tag[contains(text()='value')][3]

    //    4.//tag[contains(@class,"value")]


    //5. Xpath by indexing : //tag[contains(text()='value')][3]
})