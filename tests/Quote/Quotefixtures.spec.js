import {test, testQ} from '../../fixturesframe/crmfixtures'
import quoteclass from '../../Pages/Contact'
import quote from '../../test-data/quote.json'

testQ('Quotefixtures',async ({quotes}) => {
    test.slow()
    await quotes.quotedetails(quote.subjectname,quote.billaddress,quote.streetaddress,quote.addqty)
}) 

