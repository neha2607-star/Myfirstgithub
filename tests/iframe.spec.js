import { test } from '@playwright/test'

test('iframe', async ({ page }) => {

    await page.goto('https://demoapps.qspiders.com/ui/frames?sublist=0')

    // await page.locator('#username').fill('sdf')

    // contentFrame() targets the HTML document inside the iframe
    // let iframe = await page.locator('//iframe[@class="w-full h-96"]').contentFrame()
    // await iframe.locator('#username').fill('sdf')

    let iframe = await page.frameLocator('//iframe[@class="w-full h-96"]')
    await iframe.locator('#username').fill('sdf')
})



//nested iframe 

test.only('nested iframe', async ({ page }) => {

    await page.goto('https://demoapps.qspiders.com/ui/frames/nested?sublist=1')

    // targetting the parent iframe
    let parentframe = await page.frameLocator('//iframe[@class="w-full h-96"]')

    // targetting the child iframe
    let childframe = await parentframe.frameLocator('//section[@class="main_form_container"]//iframe')

    // targetting the input box present inside the child iframe
    await childframe.locator('#email').fill('abc@email.com')
})