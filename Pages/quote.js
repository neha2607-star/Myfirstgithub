import { expect } from "@playwright/test"

export class quoteclass{

    constructor(page)
    {
        this.page = page
  this.hover = page.getByRole('link',{name:'More'})
  this.quotelink = page.locator('//a[@name="Quotes"]')
  this.createqute = page.locator('//img[@alt="Create Quote..."]')
  this.subjectn = page.locator('//input[@name="subject"]')
  this.pop1 = page.locator('(//img[@title="Select"])[3]')
  this.pop2 = page.locator('//img[@id="searchIcon1"]')
  //adding qty
  this.addingqty = page.locator('//input[@name="qty1"]')
//Save
  this.savebtn = page.locator('(//input[@title="Save [Alt+S]"])[1]')
//validation 
  this.qassert = page.locator('//span[@id="dtlview_Subject"]')
  this.hover1 = page.locator('//img[@src="themes/softed/images/user.PNG"]')
  this.signout = page.locator('//a[text()="Sign Out"]')
  this.bill = page.locator('//textarea[@name="bill_street"]')
  this.street = page.locator('//textarea[@name="ship_street"]')

    }

async quotedetails (sbjectname,billadd,streetadd,addqty)
{
    await this.hover.first().hover();
    await this.quotelink.click()
    await this.createqute.click()
    await this.subjectn.fill(sbjectname)
    await this.addingqty.fill(addqty)
    await this.bill.fill(billadd)
    await this.street.fill(streetadd)

          


  const  [popupnew] = await Promise.all([
       this.page.waitForEvent('popup'),
await this.pop1.click()
    ])
await popupnew.getByRole('link',{name:'TATA'}).first().click()
    console.log(popupnew.url());
  
    const  [popupnewQ] = await Promise.all([
        this.page.waitForEvent('popup'),
this.pop2.click()
    ])
await popupnewQ.locator(('//a[@id="popup_product_17"]')).click()
    console.log(popupnewQ.url());

    await this.savebtn.click()
    await expect(this.qassert).toContainText(sbjectname)
    await this.hover1.hover()
    await this.signout.click()
}

}
    
