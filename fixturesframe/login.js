import { test as base } from '@playwright/test'
import { loginclass } from '../pages/login'
import login from '../test-data/login.json'

export let test = base.extend({

    login: async ({ page }, use) => {

        let signin = new loginclass(page)

        await signin.launchurl(login.url)
        await signin.details(login.username,login.password)

        await use(page)

    }

    //here we use this all methods bcs login is common 

})


//syntax 


// import {test as base} from '@playwright/test'
// let test =  base.extend({

//     fixturename.async({dependency},use) =>{

//         //setup
//         await use{dependency};
        //cleanup{optional}
//     }
// })