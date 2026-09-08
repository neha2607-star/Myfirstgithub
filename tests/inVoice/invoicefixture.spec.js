import { test , testI } from "../../fixturesframe/crmfixtures";
import { invoiceclass } from "../../Pages/invoice";
import invoice from '../../test-data/invoice.json'

testI('Invoicefixtures',async ({invoices}) => {

    test.slow()
    await invoices.invoicedetails(invoice.invoicesubject,invoice.invoicebill,invoice.invoicestreet,invoice.invoiceqty)
    
})