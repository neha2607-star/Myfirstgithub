import { expect } from "@playwright/test";

export class salesorderclass{

    constructor(page)
    {


        this.page=page 
    this.hover = page.getByRole('link',{name:'More'})
this.salesorderclick = page.locator('//a[@name="Sales Order"]')
 this.createsalesorder = page.locator('//img[@alt="Create Sales Order..."]')
  this.subjectsales = page.locator('//input[@name="subject"]')
  this.pop1 = page.locator('(//img[@alt="Select"])[4]')
this.bill = page.locator('//textarea[@name="bill_street"]')
  this.street = page.locator('//textarea[@name="ship_street"]')
  this.pop2 = page.locator('//img[@title="Products"]')
 this.adqty = page.locator('//input[@name="qty1"]')
this.savebtn = page.locator('(//input[@title="Save [Alt+S]"])[1]')
this.saleassert = page.locator('//span[@id="dtlview_Subject"]')
this.hover2 = page.locator('//img[@src="themes/softed/images/user.PNG"]')
 this.signout = page.locator('//a[text()="Sign Out"]')

    }

   async saleorderdetails(subjectname,billn,streetn,qtyadd)
   {

    await this.hover.first().hover()
    await this.salesorderclick.click()
    await this.createsalesorder.click()
    await this.subjectsales.fill(subjectname)

    const [popupS] = await Promise.all([
   this.page.waitForEvent('popup'),
   this.pop1.click()
])

await popupS.getByRole('link',{name:'oo'}).click()
console.log(popupS.url());

await this.bill.fill(billn)
await this.street.fill(streetn)


const [popupnewQ] = await Promise.all([
        this.page.waitForEvent('popup'),
this.pop2.click()
    ])
await popupnewQ.locator('//a[@id="popup_product_17"]').first().click()
    console.log(popupnewQ.url());


await this.adqty.fill(qtyadd)
await this.savebtn.click()
await expect(this.saleassert).toContainText(subjectname)
await this.hover2.hover()
await this.signout.click()

    

   }




       


   

  

    
}