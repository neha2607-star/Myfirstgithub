import { test } from '@playwright/test'

test.only('notifications', async ({ browser }) => {

    // Notification permission is given at browser level
    let context = await browser.newContext({
        permissions: ['notifications']
    })

    let page = await context.newPage()

    await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0')
    await page.getByRole('button', { name: 'Notification' }).click()
    await page.waitForTimeout(4000)

    // It will check the state of the notification
    let state = await page.evaluate(() => {
        return Notification.permission
    })
    console.log(state)

    // Clears the permission that you have given
    await context.clearPermissions()

    let state2 = await page.evaluate(() => {
        return Notification.permission
    })
    console.log(state2)
})

test('deny', async ({ browser }) => {

    let context = await browser.newContext({
        permissions: []
    })

    let page = await context.newPage()

    await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0')
    await page.getByRole('button', { name: 'Notification' }).click()
    await page.waitForTimeout(4000)

    // It will check the state of the notification
    let state = await page.evaluate(() => {
        return Notification.permission
    })
    console.log(state)
})