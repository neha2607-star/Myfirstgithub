import { test } from '@playwright/test'

test('', async ({ page }) => {

    // await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    // await page.getByLabel('Name').click()

    // it is used to enter the data into the input box
    // await page.keyboard.insertText('asdfghj')

    // await page.getByLabel('Email Id').click()
    // await page.keyboard.type('fghjk')

    // keyboard.press() :- it will press the keys
    // await page.keyboard.press('Control+A')
    // await page.keyboard.press('Control+C')
    // await page.keyboard.press('Tab')
    // await page.keyboard.press('Control+V')

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    await page.getByLabel('Name').click()

    // by using keyboard.down we can enter only the single characters
    // await page.keyboard.down('a')
    // await page.keyboard.down('k')

    await page.keyboard.down('Shift')
    await page.keyboard.press('n')
    await page.keyboard.up('Shift')

})