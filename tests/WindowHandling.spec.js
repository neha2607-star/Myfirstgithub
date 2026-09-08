import { test } from '@playwright/test'

test('', async ({ page }) => {
    await page.goto('https://demoapps.qspiders.com/ui/browser/newTab?sublist=1')
    // page.waitForEvent which will trigger the new tab
    // [popup] is a variable which is completely storing the action
    // waitForEvent('popup') it is the event which is getting triggered
    let [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('button', { name: 'view more' }).first().click()
    ])
    await popup.getByRole('button', { name: 'Add to Cart' }).click() // we have to use the popup variable
    // because the complete url will be stored in that variable and we have to perform the action in
    // that url
    console.log(popup.url());
    await page.bringToFront()
})

test('amazon', async ({ page }) => {
    await page.goto('https://www.amazon.in/s?k=shoes&crid=3GJ6SPTIUEAX&sprefix=sho%2Caps%2C266&ref=nb_sb_ss_mvt-t11-ranker_ci_h1-bn-left_1_2')
    let [a] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//div[@class="a-section aok-relative s-image-tall-aspect"]').first().click()
    ])
    await a.locator('//input[@id="add-to-cart-button"]').click()
})

//task 


test.only('task',async ({page}) => {
    
    await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0')
    let [popupnew] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('button',{name:"view more"}).first().click()

    ])

    await popupnew.getByRole('button',{name:"Add to Cart"}).click()
    console.log(popupnew.url());

})