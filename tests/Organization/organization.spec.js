import {test} from '@playwright/test'
import { Organizationclass } from '../../Pages/organization';
import organization from '../../test-data/organization.json'
import login from '../../test-data/login.json'
import { loginclass } from '../../Pages/login';

test('organizationtest',async({page}) => {

     // login to the application
    await page.goto('http://localhost:8888/');
  await page.locator('//input[@name="user_name"]').fill('admin');
  await page.locator('//input[@name="user_password"]').fill('root');
  await page.getByRole('button', { name: 'Login' }).click();

  //Creae organization

  await page.getByRole('link',{name:'Organizations'}).click();
  await page.locator('//img[@alt="Create Organization..."]').click()
  await page.locator('//input[@name="accountname"]').fill('TATA1')

  let orgname = await page.locator('//input[@name="accountname"]').inputValue()
  await page.locator('//input[@value="U"]').check()
  await page.locator('//select[@name="assigned_user_id"]').selectOption('Administrator')
  await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
  console.log(await page.url());

  //validation 

  let val = await page.locator('//span[@id="dtlview_Organization Name"]').textContent()
  if(orgname==val)
  {
    console.log('Organizaton is created successfully');
}
  else
  {
    console.log('Organization not created');
    }

  await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
  await page.locator('//a[text()="Sign Out"]').click();


})


test.only('OrganizationPOM',async ({page}) => {

  let sign = new loginclass(page);
      await sign.launchurl(login.url);
      await sign.details(login.username, login.password);

  let orgd = new Organizationclass(page)
  await orgd.orgdetails(organization.accountname)
  
  
})