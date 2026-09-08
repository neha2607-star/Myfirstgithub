import {expect, test} from '@playwright/test'


export class Productclass{

    constructor(page)
    {

  this.productlink = page.getByRole('link',{name:'Products'})
  this.craeteproduct = page.locator('//img[@alt="Create Product..."]')
  this.productname =  page.locator('//input[@name="productname"]')
  this.savebtn =  page.locator('(//input[@title="Save [Alt+S]"])[1]')
  this.productassert =  page.locator('//span[@id="dtlview_Product Name"]')
  this.hover = page.locator('//img[@src="themes/softed/images/user.PNG"]')
  this.signout = page.locator('//a[text()="Sign Out"]')
 }

 async productdetails(proname)
 {
    await this.productlink.click()
    await this.craeteproduct.click()
    await this.productname.fill(proname)
    await this.savebtn.click()
    await expect( this.productassert).toContainText(proname)
    await this.hover.hover()
    await this.signout.click()
 }
}