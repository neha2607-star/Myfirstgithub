import { test as base } from './login'
import { Leadclass } from '../Pages/leads'
import { Contactclass } from '../Pages/Contact'
import { Organizationclass } from '../Pages/organization'
import { opporunityclass } from '../Pages/opportunity'
import { Productclass } from '../Pages/product'
import { quoteclass } from '../Pages/quote'
import { salesorderclass } from '../Pages/Salesorder'
import { invoiceclass } from '../Pages/invoice'




export let test = base.extend({

    lead: async ({ login }, use) => {

        let lead = new Leadclass(login)

        await use(lead)

    }

})

export let testO = base.extend({

    Organizations  :async ({login},use) => {

        let Organizations = new Organizationclass(login)
         await use(Organizations)
        
    }


})

export let testC = base.extend({

    contacts  :async ({login},use) => {

        let contacts = new  Contactclass(login)
         await use(contacts)
        
    }


})


export let testOp = base.extend({

    Opprtunitys  :async ({login},use) => {

        let Opprtunitys = new  opporunityclass(login)
         await use(Opprtunitys)
        
    }


})

export let testP = base.extend({

    Products  :async ({login},use) => {

        let Products = new  Productclass(login)
         await use(Products)
        
    }


})

export let testQ = base.extend({

    quotes  :async ({login},use) => {

        let quotes = new  quoteclass(login)
         await use(quotes)
        
    }


})

export let testS = base.extend({

    salesorders  :async ({login},use) => {

        let salesorders = new  salesorderclass(login)
         await use(salesorders)
        
    }


})

export let testI = base.extend({

    invoices  :async ({login},use) => {

        let invoices = new  invoiceclass(login)
         await use(invoices)
        
    }


})


//base.extend : "Create my own fixture using Playwright's base fixture."
// invoices  : invoices is simply the name of your fixture.
//use : Give this fixture to the test."
// async ({login},use) :  same arrow function instead of page we using login because login is common
//let invoices = new invoiceclass(login); : creating object
// await use(invoices): "Now make this invoices object available to my test."