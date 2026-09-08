import {test} from '@playwright/test'
import { Productclass } from '../../Pages/product';
import login from '../../test-data/login.json'
import { loginclass } from '../../Pages/login';
import product from '../../test-data/product.json'

test('Producttest',async({page}) => {

     // login to the application
await page.goto('http://localhost:8888/');
  await page.locator('//input[@name="user_name"]').fill('admin');
  await page.locator('//input[@name="user_password"]').fill('root');
  await page.getByRole('button', { name: 'Login' }).click();

  //Creae organization

  await page.getByRole('link',{name:'Products'}).click();
  await page.locator('//img[@alt="Create Product..."]').click()
  await page.locator('//input[@name="productname"]').fill('Pen')

  let productname = await page.locator('//input[@name="productname"]').inputValue()
  await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
  console.log(await page.url());

  //validation 

  let valp = await page.locator('//span[@id="dtlview_Product Name"]').textContent()
  if(productname==valp)
  {
    console.log('Product  is created successfully');
}
  else
  {
    console.log('Product is  not created');
    }

  await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
  await page.locator('//a[text()="Sign Out"]').click();


})


test.only('ProductPOM',async ({page}) => {

  let sign = new loginclass(page);
    await sign.launchurl(login.url);
    await sign.details(login.username, login.password);
    

  let prod = new Productclass(page)
  await prod.productdetails(product.productname)
  
})