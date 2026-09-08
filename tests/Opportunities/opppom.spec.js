import {test} from '@playwright/test'
import Opportunity from '../../test-data/Opprtunities.json'
import { loginclass } from '../../Pages/login';
import login from'../../test-data/login.json'
import { opporunityclass } from '../../Pages/opportunity';

test('Opportunitiestest',async({page}) => {

     // login to the application
await page.goto('http://localhost:8888/');
  await page.locator('//input[@name="user_name"]').fill('admin');
  await page.locator('//input[@name="user_password"]').fill('root');
  await page.getByRole('button', { name: 'Login' }).click();

  //Creae opprtunity

  await page.getByRole('link',{name:'Opportunities'}).click();
  await page.locator('//img[@alt="Create Opportunity..."]').click()
  await page.locator('//input[@name="potentialname"]').fill(Opportunity.opportunityname) 
  

  //popup handling
 let [popupnew] = await Promise.all([
        page.waitForEvent('popup'),
await page.locator('(//img[@title="Select"])[1]').click()
    ])
await popupnew.getByRole('link',{name:'TATA'}).first().click()
    console.log(popupnew.url());



  let opname = await page.locator('//input[@name="potentialname"]').inputValue()
  await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
  console.log(await page.url());

  //validation 

  let val2 = await page.locator('//span[@id="dtlview_Opportunity Name"]').textContent()
  if(opname==val2)
  {
    console.log('Opportunity  is created successfully');
}
  else
  {
    console.log('Opportunity is  not created');
    }

  await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
  await page.locator('//a[text()="Sign Out"]').click();


})


test('OpportunityPom',async ({page}) => {

  let sign = new loginclass(page);
    await sign.launchurl(login.url);
    await sign.details(login.username, login.password);
    

  let oppv = new opporunityclass(page)
  await oppv.oppdetails(Opportunity.opportunityname)
  
})