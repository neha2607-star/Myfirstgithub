import{test} from '@playwright/test'

test('End to end',async ({page}) => {

    await page.goto('https://automationexercise.com/')
    await page.getByRole('link',{name:' Signup / Login'}).click();
    await page.getByPlaceholder('Name').fill('Neha')
    await page.locator('//input[@data-qa="signup-email"]').fill('jk456yhd@gmail.com')
    await page.getByRole('button',{name:'Signup'}).click()
    await page.locator('#id_gender2').check()
    await page.getByLabel('Password').fill('Neha123')
    await page.locator('//select[@data-qa="days"]').selectOption('1')
    await page.locator('//select[@data-qa="months"]').selectOption('1')
    await page.locator('//select[@data-qa="years"]').selectOption('2021')
    await page.getByLabel('First name').fill('Neha')
    await page.getByLabel('Last name').fill('Chandrani')
    await page.getByLabel('Address').first().fill('Banglore')
    await page.getByLabel('Country').selectOption('India')
    await page.getByLabel('State').fill('Karnataka')
    await page.getByLabel('City').fill('Banglore')
    await page.locator('//input[@data-qa="zipcode"]').fill('560087')
    await page.getByLabel('Mobile Number').fill('816098654')
    await page.getByRole('button',{name:'Create Account'}).click()
    await page.locator('//a[@data-qa="continue-button"]').click()
    let addtocart = await page.locator('//a[@class="btn btn-default add-to-cart"]').first()
    await addtocart.click();
    await page.locator('//a[@href="/view_cart"]').nth(1).click()
    await page.locator('//a[@class="btn btn-default check_out"]').click()
    await page.getByRole('link',{name:'Place Order'}).click()
    await page.locator('//input[@name="name_on_card"]').fill('Neha')
    await page.locator('//input[@name="card_number"]').fill('123456787654')
    await page.locator('//input[@name="cvc"]').fill('682')
    await page.locator('//input[@name="expiry_month"]').fill('04')
    await page.locator('//input[@data-qa="expiry-year"]').fill('2032')
    await page.getByRole('button',{name:'Pay and Confirm Order'}).click()
    let message =  await page.getByRole('StaticText',{name:'Congratulations! Your order has been confirmed!'}).allTextContents();
    console.log(message);
    await page.getByRole('link',{name:'Download Invoice'}).click()
    await page.locator('//a[@data-qa="continue-button"]').click()
    
})