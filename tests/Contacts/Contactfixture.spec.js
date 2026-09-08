import {test, testC} from '../../fixturesframe/crmfixtures'
import { Contactclass } from '../../Pages/Contact'
import contact from '../../test-data/Contact.json'

testC('contactfixtures',async ({contacts}) => {
    test.slow()
    await contacts.contactdetails(contact.lastnameC)
}) 

