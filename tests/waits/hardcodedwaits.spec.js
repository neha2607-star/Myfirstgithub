import { test } from '@playwright/test';

test('hardcoded', async ({ page }) => {


    //hardcode time use to wait action or delay the  each action but
    //normal wait use to avoild failure
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.waitForTimeout(3000);

    await page.getByLabel('Username').fill('student');

    await page.waitForTimeout(3000);

    await page.getByLabel('Password').fill('Student123');

    await page.waitForTimeout(3000);

    await page.getByRole('button', { name: 'Submit' }).click();

});