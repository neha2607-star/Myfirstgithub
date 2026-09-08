import {expect, test} from '@playwright/test'

test('asserions',async ({page}) => {
    //*if the assertion is getting failed then it will throw the error
    //* even if the error occurs and we wanted to execute the next line then we can go for soft assertions
    await page.goto('https://www.google.com')
    console.log(await page.title());
    
    //! toHaveTitle:- it will check for the title of the webpage
    await expect.soft(page).toHaveTitle('Google')
    console.log('hiii');

    //!toHaveURL:- it will check whether the current webpage is haveing this URL or not
    await expect(page).toHaveURL('https://www.google.com')
    
    //!toBeVisible()- it will check whether the element is visible or not
    await expect(page.locator('//textarea[@id="APjFqb"]')).toBeVisible()

    //!toBeHidden():- it will check whether the element is hidden or not
    // await expect(page.locator('//textarea[@id="APjFqb"]')).toBeHidden()

    //! toHaveText():-it checks the exact text
    await expect(page.locator('(//input[@class="gNO89b"])[2]')).toHaveText('Google Search')

    //! toContainText:-it check for the partial text
    await expect(page.locator('(//input[@class="gNO89b"])[2]')).toContainText('Goo')

    //!toBeEnabled:- it will check whether the element is enable or not
    await expect(page.locator('//textarea[@id="APjFqb"]')).toBeEnabled()

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')

    //!tohavevalue():-checks with the input value
    await page.locator('#name').fill('akhila')
    await expect(page.locator('#name')).toHaveValue('akhila')

    await page.locator('//li[text()="Disabled"]').click()

    //!xhecks whether the element is disabled
    await expect(page.locator('#name')).toBeDisabled()

    //!checks whether the attribute is present
    await expect(page.locator('(//input[@type="text"])[1]')).toHaveAttribute('name','name')

    //! toBeChecked():- it will check whether the checkbox is checked or not
    await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
    await page.locator('#domain_a').check()
    await expect(page.locator('#domain_a')).not.toBeChecked()
}) 