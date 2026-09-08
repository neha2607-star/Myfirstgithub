import { expect } from "@playwright/test";

export  class opporunityclass{

    constructor(page)
    {

this.page = page;   // ⭐ This line is required
 this.opportunitylink = page.getByRole('link',{name:'Opportunities'})
  this.oppcreate = page.locator('//img[@alt="Create Opportunity..."]')
  this.potentialname = page.locator('//input[@name="potentialname"]')
  this.savebtn = page.locator('(//input[@title="Save [Alt+S]"])[1]')
  this.oppassert = page.locator('//span[@id="dtlview_Opportunity Name"]')
  this.hover = page.locator('//img[@src="themes/softed/images/user.PNG"]')
  this.signout =  page.locator('//a[text()="Sign Out"]')
  this.popn = page.locator('(//img[@title="Select"])[1]')


}

 


async oppdetails(potentialnme)
{

    await this.opportunitylink.click()
    await this.oppcreate.click()
    await this.potentialname.fill(potentialnme)
   

    const [popup] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.popn.click()
        ]);

        await popup.getByRole('link', { name: 'TATA' }).first().click();

    await this.savebtn.click()
    await expect(this.oppassert).toContainText(potentialnme)
    await this.hover.hover()
    await this.signout.click()
}

  
 

    }


