import {test, testOp} from '../../fixturesframe/crmfixtures'
import opporunityclass from '../../Pages/Contact'
import Opportunities from '../../test-data/Opprtunities.json'

testOp('Opprtunityfixtures',async ({Opprtunitys}) => {
    test.slow()
    await Opprtunitys.oppdetails(Opportunities.opportunityname)
}) 

