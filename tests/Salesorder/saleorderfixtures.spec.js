import {test, testS} from '../../fixturesframe/crmfixtures'
import salesorderclass from '../../Pages/Contact'
import Salesorder from '../../test-data/salesorder.json'

testS('salesorder',async ({salesorders}) => {
    test.slow()
    await salesorders.saleorderdetails(Salesorder.subjectnamesale,Salesorder.billadress,Salesorder.streetadress,Salesorder.qty)
}) 

