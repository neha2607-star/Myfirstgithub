import { test } from '@playwright/test'

test('', async ({ page }) => {

    await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
    await page.locator('#domain_a').click()
    await page.locator('#domain_b').check()
    await page.locator('#domain_b').uncheck()

    await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0')
    await page.locator('#attended').check()

    await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
    let checkbox = page.locator('//input[@type="checkbox"]')
let count = await checkbox.count()
for (let i = 0; i < count; i++) {
    await checkbox.nth(i).check();
}

})