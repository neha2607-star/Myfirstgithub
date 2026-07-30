import { expect } from "@playwright/test";

export class invoiceclass
{
    constructor(page)
    {
        this.page = page
   this.hover = page.getByRole('link',{name:'More'})
  this.invoice = page.locator('//a[@name="Invoice"]')
 this.createinvoice = page.locator('//img[@alt="Create Invoice..."]')
 this.sbjectname= page.locator('//input[@name="subject"]')
this.pop1 =page.locator('(//img[@alt="Select"])[3]')
this.billadress = page.locator('//textarea[@name="bill_street"]')
 this.streetadress = page.locator('//textarea[@name="ship_street"]')
  this.pop2 = page.locator('//img[@title="Products"]')

       
  this.aq=page.locator('//input[@name="qty1"]')
  this.svbtn = page.locator('(//input[@title="Save [Alt+S]"])[1]')
  this.invoiceassert = page.locator('//span[@id="dtlview_Subject"]')
  this.hover2 = page.locator('//img[@src="themes/softed/images/user.PNG"]')
  this.signout= page.locator('//a[text()="Sign Out"]')
    }

    async invoicedetails(subjectname,billa,streeta,addQ)
    {

        await this.hover.first().hover()
        await this.invoice.click()
        await this.createinvoice.click()
        await this.sbjectname.fill(subjectname)

              //popuphandling
         const [popupI] = await Promise.all([
    this.page.waitForEvent('popup'),
    this.pop1.click()
])

await popupI.getByRole('link',{name:'oo'}).click()
console.log(popupI.url());

        await this.billadress.fill(billa)
        await this.streetadress.fill(streeta)

        //popuphandling
        let [popupnewQ] = await Promise.all([
        this.page.waitForEvent('popup'),
this.pop2.click()
    ])
await popupnewQ.locator('//a[@id="popup_product_17"]').first().click()
    console.log(popupnewQ.url());

    await this.aq.fill(addQ)
    await this.svbtn.click()
    await expect(this.invoiceassert).toContainText(subjectname)
    await this.hover2.hover()
    await this.signout.click()


    }
}