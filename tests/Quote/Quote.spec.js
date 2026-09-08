import {test} from '@playwright/test'
import login from '../../test-data/login.json'
import { quoteclass } from '../../Pages/quote';
import { loginclass } from '../../Pages/login';
import quote from '../../test-data/quote.json'


test('Contacttest',async({page}) => {

     // login to the application
    await page.goto('http://localhost:8888/');
  await page.locator('//input[@name="user_name"]').fill('admin');
  await page.locator('//input[@name="user_password"]').fill('root');
  await page.getByRole('button', { name: 'Login' }).click();

  //Create



  await page.getByRole('link',{name:'More'}).first().hover();
  await page.getByRole('link',{name:'Quotes'}).click();
  await page.locator('//img[@alt="Create Quote..."]').click()
  await page.locator('//input[@name="subject"]').fill('Q1')
  let subject = await page.locator('//input[@name="subject"]').inputValue()

  //popuphanding
   let [popupnew] = await Promise.all([
        page.waitForEvent('popup'),
await page.locator('(//img[@title="Select"])[3]').click()
    ])
await popupnew.getByRole('link',{name:'TATA'}).first().click()
    console.log(popupnew.url());

    //billing address

    await page.locator('//textarea[@name="bill_street"]').fill('street5')
    await page.locator('//textarea[@name="ship_street"]').fill('street6')

    //popup handling

       let [popupnewQ] = await Promise.all([
        page.waitForEvent('popup'),
await page.locator('//img[@title="Products"]').click()
    ])
await popupnewQ.locator('//a[@id="popup_product_55"]').first().click()
    console.log(popupnewQ.url());


    //adding qty

    await page.locator('//input[@name="qty1"]').fill('1')



    //Save
  await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
  console.log(await page.url());

  //validation 

  let val0 = await page.locator('//span[@id="dtlview_Subject"]').textContent()
  if(subject==val0)
  {
    console.log('Quote  is created successfully');
}
  else
  {
    console.log('Quote is  not created');
    }

  await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
  await page.locator('//a[text()="Sign Out"]').click();


})


test('quotePOM',async ({page}) => {

  let sign = new loginclass(page);
    await sign.launchurl(login.url);
    await sign.details(login.username, login.password);
    

  let quoted = new quoteclass(page)
  await quoted.quotedetails(quote.subjectname,quote.billaddress,quote.streetaddress,quote.addqty)
  
})


