
import {test} from '@playwright/test'
test('page.on', async ({ page }) => {
    await page.goto('https://www.way2automation.com/way2auto_jquery/alert.php#load_box')

    page.once('dialog', async (dialog) => {
        let msg = await dialog.message()
        console.log(msg)

        await dialog.accept()
    })

    await page.getByRole('button', { name: 'SIMPLE ALERT' }).click()
    await page.getByRole('button', { name: 'INPUT ALERT' }).click()
    await page.waitForTimeout(3000)
})