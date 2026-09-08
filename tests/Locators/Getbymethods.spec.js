import {test} from '@playwright/test'

test('getbylabel',async ({page}) => {

    //1.If in label class and input class if 'for' and 'id' attribute value is same then and then it will
    //targget to input box by label

    // await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.getByLabel('Name').fill('asdfg')
    
    await page.goto("https://demoapps.qspiders.com/")
    await page.getByLabel('Name').fill('asdfg')

    // getByLabel :- it can enter the data into an input field
    // but there should be a connection between the label input i.e., for in the label id in the input tag should have the same value
    // await page.getByLabel('Name').fill('akhila')

    // getByPlaceholder :- it is going to target the input tag based on the placeholder attribute
    // await page.getByPlaceholder('Enter Your Email').fill('abc@gmail.com')

    // getByRole which is used to target a particular element based on the role of the element
    // await page.getByRole('button', { name: 'Register' }).click()
    // await page.getByRole('link', { name: 'Login Now' }).click()

    // await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
    // await page.getByRole('checkbox', { name: 'Domain' }).click()

    // getByAltText :- based on the alt attribute it is going to target the image
    // await page.getByAltText('Domain').highlight()
    // await page.goto('https://www.flipkart.com')
    // await page.getByAltText('Image').first().click()

    // getByTitle:- If we have the title attribute then we can go for the getByTitle
    // await page.goto('https://www.flipkart.com/search?q=dresses&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
    // await page.getByTitle('Women Skater Multicolor Above Knee/Mid Thigh Length Dress').click()

    // getByText:- which is used to target the visible text in the web page
    // await page.getByText('Clothing and Accessories').first().click()

    // getByTestId used to target the testid data attribute
    await page.goto('https://www.saucedemo.com/')
    await page.getByTestId('username').fill('akhila')

})
