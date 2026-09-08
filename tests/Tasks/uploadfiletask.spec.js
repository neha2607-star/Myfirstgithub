import{test} from '@playwright/test'

test('task3',async ({page}) => {

    // task 3 : hover on testershub>demo testing site> multiple option>sellect any option
    await page.goto('https://www.globalsqa.com/')
    await page.getByRole('link',{name : 'TESTER’S HUB'}).hover();
    await page.getByRole('link',{name : 'Demo Testing Site'}).hover();
    await page.getByRole('link',{name : 'Tooltip'}).click();


})

test('task2',async ({page}) => {

    // task 2  : in sauce demo app >  login wit standard user and pwd >scoll down> add to art >scroll up> sort filter select any option  > again scroll down >add to cart >scroll up >  go to cart  > enter details > finish>print message 'thank u for shopping'

    await page.goto('https://www.saucedemo.com/')
    await page.waitForTimeout(2000)
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button',{name:'Login'}).click()
    await page.mouse.wheel(0,2000)
    await page.locator('//button[@data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    await page.mouse.wheel(0,-2000)
    await page.locator('//select[@data-test="product-sort-container"]').selectOption('Name (Z to A)');
    await page.mouse.wheel(0,2000)
    await page.locator('#add-to-cart-sauce-labs-bike-light').click()
    await page.mouse.wheel(0,-2000)
    await page.locator('//a[@data-test="shopping-cart-link"]').click()
    await page.locator('//button[@data-test="checkout"]').click()
    await page.getByPlaceholder('First Name').fill('Neha')
    await page.getByPlaceholder('Last Name').fill('Chandrani')
    await page.getByPlaceholder('Zip/Postal Code').fill("560090")
    await page.getByRole('button',{name:'continue'}).click()
    await page.mouse.wheel(0,2000)
    await page.getByRole('button',{name:'Finish'}).click()
    let heading = await page.getByRole('heading',{name:'Thank you for your order!'}).textContent()
    console.log(heading);
    
    })

test('uploading the file', async ({ page }) => {
    //single file upload
    await page.goto('https://practice.expandtesting.com/upload')
    await page.locator('#fileInput').setInputFiles('C:/Users/DELL/Desktop/Ply001/screenshot/{date}.png')
    await page.locator('#fileSubmit').click()

})