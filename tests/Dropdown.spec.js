import { test } from '@playwright/test';

test('dropdowns', async ({ page }) => {

    await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0');

    // Selecting the value from the dropdown through the value
    await page.locator("//select[@id='select3']").selectOption({ value: 'Canada' });

    // Selecting the value from the dropdown through the text
    await page.locator("//select[@id='select3']").selectOption('China');

    // Selecting the value from the dropdown through the index
    await page.locator("//select[@id='select3']").selectOption({ index: 3 });

});

test('select', async ({ page }) => {

    await page.goto('https://www.amazon.in/s?k=shoes&s=relevanceblender&crid=38Y9H2TFPGVVX&qid=1782788266&sprefix=shoes%2Caps%2C227&ref=sr_st_relevanceblender&ds=v1%3Aif52kmmr1m1%2B%2FEy6XqcytI0564FaFMin62fAwrGVQVo');

    // await page.locator("//select[@id='s-result-sort-select']").selectOption({ value: 'relevanceblender' });

    await page.locator("//span[text()='Featured']").click();
    await page.locator("//a[text()='Newest Arrivals']").click();

});

test('multi select', async ({ page }) => {

    await page.goto('https://demoapps.qspiders.com/ui/dropdown/multiselect?sublist=1');

    await page
        .locator("//select[@id='select-multiple-native']")
        .selectOption([
            {
                value: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
            },
            {
                value: 'Mens Cotton Jacket'
            }
        ]);

    await page.locator("//button[text()='Add']").click();

});