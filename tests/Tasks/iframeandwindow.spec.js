import {test} from '@playwright/test'

test('task1',async ({page}) => {

    await page.goto('https://www.flipkart.com/')
    let search = await page.getByPlaceholder('Search for Products, Brands and More').first()
    await search.click()
    await search.fill('mobiles')
    await search.keyboard.press('Enter')
    let img = await page.locator('//img[@class="UCc1lI"]').first()


    let[popup] = await promises.all([
        
        page.waitForEvent('popup'),

        img.click()
               
    ])

    await popup.locator('')
    

    
})