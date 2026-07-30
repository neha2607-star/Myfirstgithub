import {test, testO} from '../../fixturesframe/crmfixtures'
import { Organizationclass } from '../../Pages/organization'
import Organization from '../../test-data/organization.json'

testO('Organizationfixture',async ({Organizations}) => {
    test.slow()
    await Organizations.orgdetails(Organization.accountname)
}) 

