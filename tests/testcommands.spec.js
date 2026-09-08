// Notes  :

// test commands  :

// 1.npx playwright test :   it will execute all files which is under tests folder
// 2. npx playwright test [relative path ]  : it will execute only particular file
// 3. npx playwright test --headed :  it will execute in headed mode
// 4. npx playwright test [relative path] --grep "title name" : it will run only that test only

//for ex.
// test('annotation6',async () => {
//     console.log(' annotation 6');
    
// })
//command : npx playwright test [relative path] -g "annotation6"

//5. npx playwright test [relative path] --last-failed  : it will execute recent failed test block

//here fail any one test ..then again execute by normal command [it will execute only that last failed test block]

//6. npx playwright test [relative path] --project -"browser name"  :it will execute only in particular browser 

//7. npx playwright test [relative path] --debug  :it will executed in debug mode
