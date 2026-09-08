import { expect } from "@playwright/test";

export class Contactclass

{

    constructor(page)
{
  this.contactlink =  page.getByRole('link',{name:'Contacts'})
  this.cratecontact =  page.locator('//img[@alt="Create Contact..."]')
  this.lastnamec =  page.locator('//input[@name="lastname"]')
  this.savbtn =  page.locator('(//input[@title="Save [Alt+S]"])[1]')
  this.contcatassert =  page.locator('//span[@id="dtlview_Last Name"]')
  this.hover =  page.locator('//img[@src="themes/softed/images/user.PNG"]')
  this.signout =  page.locator('//a[text()="Sign Out"]')
 }

    async contactdetails(lstname)
    {
        await this.contactlink.click()
        await this.cratecontact.click()
        await this.lastnamec.fill(lstname)
        await this.savbtn.click()
        await  expect(this.contcatassert).toContainText(lstname)
        await this.hover.hover()
        await this.signout.click()

    }
}