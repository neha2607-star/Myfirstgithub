import { test,expect } from "@playwright/test";
import login from '../../test-data/login.json'
import leads from '../../test-data/leads.json'
import { loginclass } from "../../Pages/login";
import { Leadclass } from "../../Pages/leads";


//DDT , form , common utinls , customfixtures  : Hybrid framework we are using

//here ../  :use for to go out of folder

test('lead module', async ({ page }) => {

  // login to the application
  await page.goto(login.url);
  await page.locator('//input[@name="user_name"]').fill(login.username);
  await page.locator('//input[@name="user_password"]').fill(login.password);
  await page.getByRole('button', { name: 'Login' }).click();

  // creating the lead
  await page.getByRole('link', { name: 'Leads' }).click();
  await page.getByRole('img', { name: 'Create Lead...' }).click();
  await page.locator('//select[@name="salutationtype"]').selectOption({ value: 'Ms.' });
  await page.locator('//input[@name="firstname"]').fill(leads.firstname);
  await page.locator('//input[@name="lastname"]').fill(leads.lastname);


  await page.locator('//input[@name="company"]').fill(leads.company_name);
  await page.locator('(//input[@title="Save [Alt+S]"])[1]').click();

  // validation
  // let valid = await page.locator('//span[@id="dtlview_Last Name"]').textContent();

  // if (lastname === valid) {
  //   console.log('lead is created');
  // } else {
  //   console.log('lead is not created');
  // }


  //using assertiion validation
  let lastname = await page.locator('//input[@name="lastname"]').inputValue()
  await expect(page.locator('//span[@id="dtlview_Last Name"]')).toContainText(lastname)

await page.waitForTimeout(3000)
  await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
  await page.locator('//a[text()="Sign Out"]').click();

});



//LOGIN 

test('pom', async ({ page }) => {

    let signin = new loginclass(page);

    await page.goto(login.url);
    await signin.username.fill(login.username);
    await signin.password.fill(login.password);
    await signin.button.click();
    

    let leadn = new Leadclass(page);

    await leadn.Leadclick.click();
    await leadn.createlead.click()
    await leadn.select.selectOption({ value: 'Ms.' });
    await leadn.firstname.fill(leads.firstname);
    await leadn.lastname.fill(leads.lastname);
    await leadn.companyname.fill(leads.company_name);
    await leadn.savebtn.click()
  let lastname = await page.locator('//input[@name="lastname"]').inputValue();
await expect(leadn.asssert).toContainText(lastname);
    await leadn.hover.hover();
    await leadn.signout.click()

    
})

// Another method login

test('pom2', async ({ page }) => {

    let sign = new loginclass(page);
    await sign.launchurl(login.url);
    await sign.details(login.username, login.password);

    let Ldetails = new Leadclass(page)
    await Ldetails.leaddetails(leads.firstname,leads.lastname,leads.company_name)


})


//Leads 



