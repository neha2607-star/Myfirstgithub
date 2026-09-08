// https://practicetestautomation.com/practice-test-login/ 

import { test } from '@playwright/test'

test('css locators', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/')

    // tag + id
    await page.locator('input#username').fill('student')

    // locate the password

    await page.locator('input#password').fill('p123')

    // tag + class
    await page.locator('button.btn').click()

})

test('css', async ({ page }) => {

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')

    // id
    await page.locator('#name').fill('akhila')

    // attribute
    await page.locator('[placeholder="Enter Your Email"]').fill('abc@gmail.com')

    // tag + attribute
    await page.locator('input[placeholder="Enter your password"]').fill('asdfgh')

    await page.locator('button[type="submit"]').click()

})