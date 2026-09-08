import {test} from '@playwright/test'
import { promises } from 'node:dns';
import login from '../../test-data/login.json'
import { loginclass } from '../../Pages/login';
import invoice from '../../test-data/invoice.json'
import { invoiceclass } from '../../Pages/invoice';

test('Invoicetest',async({page}) => {

     // login to the application
    await page.goto('http://localhost:8888/');
  await page.locator('//input[@name="user_name"]').fill('admin');
  await page.locator('//input[@name="user_password"]').fill('root');
  await page.getByRole('button', { name: 'Login' }).click();

  //Creae organization

  await page.getByRole('link',{name:'More'}).first().hover();
  await page.locator('//a[@name="Invoice"]').click();
  await page.locator('//img[@alt="Create Invoice..."]').click()
  await page.locator('//input[@name="subject"]').fill('Invoice1')
  let subject = await page.locator('//input[@name="subject"]').inputValue()

  //popup handling

  let [popupI] = await Promise.all([
    page.waitForEvent('popup'),
    await page.locator('(//img[@alt="Select"])[3]').click()
])

await popupI.getByRole('link',{name:'oo'}).click()
console.log(popupI.url());


await page.locator('//textarea[@name="bill_street"]').fill('street5')
    await page.locator('//textarea[@name="ship_street"]').fill('street6')

    //popup handling

       let [popupnewQ] = await Promise.all([
        page.waitForEvent('popup'),
await page.locator('//img[@title="Products"]').click()
    ])
await popupnewQ.locator('//a[@id="popup_product_17"]').first().click()
    console.log(popupnewQ.url());


    //adding qty

    await page.locator('//input[@name="qty1"]').fill('1')

  await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
  console.log(await page.url());

  //validation 

  let valSW = await page.locator('//span[@id="dtlview_Subject"]').textContent()
  if(subject==valSW)
  {
    console.log('Invoice  is created successfully');
}
  else
  {
    console.log('Invoice is  not created');
    }

  await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
  await page.locator('//a[text()="Sign Out"]').click();


})


test('invoicePOM',async ({page}) => {

   let sign = new loginclass(page);
      await sign.launchurl(login.url);
      await sign.details(login.username, login.password);

  let inv = new invoiceclass(page)
  await inv.invoicedetails(invoice.invoicesubject,invoice.invoicebill,invoice.invoicestreet,invoice.invoiceqty)
  
})