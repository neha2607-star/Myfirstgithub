import { expect } from "@playwright/test";

export class Organizationclass {

constructor(page)
{

  this.Clickorganization = page.getByRole('link',{name:'Organizations'})
  this.createorganization = page.locator('//img[@alt="Create Organization..."]')
  this.accountname =  page.locator('//input[@name="accountname"]')
  this.check =  page.locator('//input[@value="U"]')
  this.select =  page.locator('//select[@name="assigned_user_id"]')
  this.savebtn = page.locator('(//input[@title="Save [Alt+S]"])[1]')
    //validation 

  this.orgassert = page.locator('//span[@id="dtlview_Organization Name"]')
  this.hover = page.locator('//img[@src="themes/softed/images/user.PNG"]')
  this.signout = page.locator('//a[text()="Sign Out"]')

}


async orgdetails(acname)
{
    await this.Clickorganization.click()
    await this.createorganization.click()
    await this.accountname.fill(acname)
    await this.check.check()
    await this.select.selectOption('Administrator')
    await this.savebtn.click()
    await expect(this.orgassert).toContainText(acname)
    await this.hover.hover()
    await this.signout.click()

}
}