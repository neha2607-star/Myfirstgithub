import { expect } from "@playwright/test"

export class Leadclass{

    constructor(page)
    {
      this.Leadclick = page.getByRole('link', { name: 'Leads' })
      this.createlead = page.getByRole('img', { name: 'Create Lead...' })
      this.select =  page.locator('//select[@name="salutationtype"]')
      this.firstname =  page.locator('//input[@name="firstname"]')
      this.lastname =  page.locator('//input[@name="lastname"]')
      this.companyname = page.locator('//input[@name="company"]')
      this.savebtn = page.locator('(//input[@title="Save [Alt+S]"])[1]')
      this.hover =  page.locator('//img[@src="themes/softed/images/user.PNG"]')
      this.signout  =  page.locator('//a[text()="Sign Out"]')
      this.lstname = page.locator('//span[@id="dtlview_Last Name"]')
    }


 

  async leaddetails(fname,lname,cname)
    {
        await this.Leadclick.click()
        await this.createlead.click()
        await this.select.selectOption({ value: 'Ms.' });
        await this.firstname.fill(fname)
        await this.lastname.fill(lname)
        await this.companyname.fill(cname)
        await this.savebtn.click()
        await expect(this.lstname).toContainText(lname)
        await this.hover.hover();
        await this.signout.click()


    }


}