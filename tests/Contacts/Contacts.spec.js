import {test} from '@playwright/test'
import login from'../../test-data/login.json'
import { loginclass } from '../../Pages/login';
import Contact from '../../test-data/Contact.json'
import { Contactclass } from '../../Pages/Contact';

test('Contacttest',async({page}) => {

     // login to the application
    await page.goto('http://localhost:8888/');
  await page.locator('//input[@name="user_name"]').fill('admin');
  await page.locator('//input[@name="user_password"]').fill('root');
  await page.getByRole('button', { name: 'Login' }).click();

  //Creae organization

  await page.getByRole('link',{name:'Contacts'}).click();
  await page.locator('//img[@alt="Create Contact..."]').click()
  await page.locator('//input[@name="lastname"]').fill('Chand')

  let lstname = await page.locator('//input[@name="lastname"]').inputValue()
  await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
  console.log(await page.url());

  //validation 

  let val0 = await page.locator('//span[@id="dtlview_Last Name"]').textContent()
  if(lstname==val0)
  {
    console.log('Contact  is created successfully');
}
  else
  {
    console.log('Contact is  not created');
    }

  await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
  await page.locator('//a[text()="Sign Out"]').click();


})

test('contactPOM',async ({page}) => {

      let sign = new loginclass(page);
      await sign.launchurl(login.url);
      await sign.details(login.username, login.password);

    let contactD = new Contactclass(page)
    await contactD.contactdetails(Contact.lastnameC);
  
})