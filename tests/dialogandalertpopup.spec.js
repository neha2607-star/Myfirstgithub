import { test } from '@playwright/test'

test('dialogs', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.getByRole('button', { name: 'Simple Alert' }).click()
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: 'Confirmation Alert' }).click()
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: 'Prompt Alert' }).click()
    await page.waitForTimeout(3000)

    // By default, Playwright will cancel the dialog boxes

})


test('dialogs2', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.getByRole('button', { name: 'Simple Alert' }).click()
    await page.waitForTimeout(3000)

    await page.getByRole('button', { name: 'Confirmation Alert' }).click()
    await page.waitForTimeout(3000)

    await page.getByRole('button', { name: 'Prompt Alert' }).click()
    await page.waitForTimeout(3000)

    // By default Playwright will cancel the dialog boxes
    // To handle the dialog boxes we have to use event listeners
    // page.once
    // page.on
})

test('page.on', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.once('dialog', async (dialog) => {
        // Print the message of the dialog box
        let msg = await dialog.message()
        console.log(msg)

        await dialog.accept()
    })

    await page.getByRole('button', { name: 'Simple Alert' }).click()
    await page.getByRole('button', { name: 'Confirmation Alert' }).click()
    await page.waitForTimeout(3000)
})

test('alert box', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.once('dialog', async (dialog) => {
        let msg = await dialog.message()
        console.log(msg)

        await dialog.accept()

        let type = dialog.type()
        console.log(type)
    })

    await page.getByRole('button', { name: 'Simple Alert' }).click()
    await page.waitForTimeout(3000)
})