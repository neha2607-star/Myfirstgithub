//in one tab launch 2 different applications 

import { test } from '@playwright/test';

test('page fixtures', async ({ page }) => {
    await page.goto('https://www.swiggy.com');
    await page.goto('https://www.flipkart.com');
});

// create one more test block in different browsers launch the different applications 


//  