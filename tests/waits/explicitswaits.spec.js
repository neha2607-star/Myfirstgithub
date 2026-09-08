import { test } from '@playwright/test';

test('explicit wait', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    await page.locator("//input[@id='twotabsearchtextbox']").fill('shoes');

    await page.locator("//div[@role='row']", { hasText: 'for men' })
        .first()
        .waitFor({ state: 'visible' });

    let all_ele = await page.locator("//div[@role='row']").allTextContents();
    console.log(all_ele);

    await page.locator("//div[@role='row']").first().click();

    await page.waitForLoadState('load');

    await page.locator("//h2[@class='a-size-base-plus a-spacing-none a-color-base a-text-normal']")
        .first()
        .waitFor({ state: 'visible' });

    let title = await page.locator("//h2[@class='a-size-base-plus a-spacing-none a-color-base a-text-normal']")
        .first()
        .textContent();

    console.log(title);

});