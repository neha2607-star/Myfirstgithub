import {test} from '../../fixturesframe/crmfixtures'
import leads from '../../test-data/leads.json'
import { Leadclass } from '../../Pages/leads'

test('leadfixtures',async ({lead}) => {
    test.slow()
    await lead.leaddetails(leads.firstname,leads.lastname,leads.company_name)
}) 