import { test } from '@playwright/test';

test.use({
    // For the spec file, the default timeout will be removed
    // and the action timeout will be applicable.
    actionTimeout: 10000
});

test('timeout', async ({ page }) => {

    // setDefaultTimeout() is applicable for the entire test block.
    //it will not wait for 5s...for each action , its use for if any action taking [more time then default time 30s]that this time we added as 50S to avoid failure.
    await page.setDefaultTimeout(5000);

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    await page.getByLabel('Name').fill('akhila');
    await page.getByLabel('Email Id').fill('akhila@gmail.com');
    await page.getByLabel('Password').fill('asdfgh');

    // timeout is applicable for a single method.
    await page.getByRole('button', { name: 'Register' }).click({ timeout: 1000 });

});