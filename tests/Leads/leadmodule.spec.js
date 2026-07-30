import { test } from "@playwright/test";

test('lead module', async ({ page }) => {

  // login to the application
  await page.goto('http://localhost:8888/');
  await page.locator('//input[@name="user_name"]').fill('admin');
  await page.locator('//input[@name="user_password"]').fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();

  // creating the lead
  await page.getByRole('link', { name: 'Leads' }).click();
  await page.getByRole('img', { name: 'Create Lead...' }).click();
  await page.locator('//select[@name="salutationtype"]').selectOption({ value: 'Ms.' });
  await page.locator('//input[@name="firstname"]').fill('akhila');
  await page.locator('//input[@name="lastname"]').fill('gandla');

  let lastname = await page.locator('//input[@name="lastname"]').inputValue();

  await page.locator('//input[@name="company"]').fill('qspiders');
  await page.locator('(//input[@title="Save [Alt+S]"])[1]').click();

  // validation
  let valid = await page.locator('//span[@id="dtlview_Last Name"]').textContent();

  if (lastname === valid) {
    console.log('lead is created');
  } else {
    console.log('lead is not created');
  }

  await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
  await page.locator('//a[text()="Sign Out"]').click();

});