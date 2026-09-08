import {test} from '@playwright/test';


//test annotations
// 1.test.skip() : it will skip the test in execution

// test.skip('annotation1',async () => {
//     console.log(' annotation 1');
    
// })

// 2. test.only() : it will execute only this test

// test.only('annotation2',async () => {
//     console.log(' annotation 2');
    
// })

// 3. test.fail()  : it will intentionally fail the test even if it passed [but in execution because expetation is faile it will come as passed
//when we feel , ther will be some error in locator, we can mark it as FAIL 
test.fail('annotation3',async () => {
    console.log(' annotation 3');
    
})

// // 4. test.slow()  :when partiular test is taking more time at execution
// //we at that time test will gte failed
// //to overcome this issue we can use test.slow(),which will multiplythe defaylt time  [30s +  60s]

test('annotation4',async () => {
    test.slow()
    console.log(' annotation 4');
    
})

// 5. test.describe() : it will group the tests

test.describe('annotation5',async () => {
    console.log(' annotation 5');
    
})

test('annotation6',async () => {
    console.log(' annotation 6');
    
})

