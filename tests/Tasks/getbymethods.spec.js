import{test} from '@playwright/test'

test('task1',async ({page}) => {
    
    //task1

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
    await page.getByRole('link',{name: 'Login Now'  }).click();
    await page.getByLabel('Email Id').fill('nehaka@gmail.com');
    await page.getByLabel('Password').fill('jeje');
    await page.getByRole('button',{name:'Login'}).click();
    let textContent = await page.getByText('Invalid Password').first().textContent();
    console.log(textContent);
        
       
})

test('task2',async ({context}) => {

    let page1 = await context.newPage();
    await page1.goto('https://sauce-demo.myshopify.com/');
    let url = await page1.url();
    console.log('URL is',url);
    let title = await page1.title();
    console.log('Title is',title);
    await page1.getByRole('link',{name:'Log In'}).click();
    await page1.getByLabel('Email Address').fill('cneha2301@gmail.com')
    await page1.getByLabel('Password').fill('4iJLPzk9KZ@eAAk')
    await page1.getByRole('button',{name:'Sign In'}).click();
   
})



test('task3',async ({context}) => {

    let pagen = await context.newPage();
    await pagen.goto('https://www.flipkart.com/')
    let search = await pagen.getByPlaceholder('Search for Products, Brands and More').first()
    await search.click()
    await search.fill('mobiles');
    await pagen.keyboard.press('Enter')
    // let searchicon = await pagen.getByRole('image',{name:'Search Icon'});
    // await searchicon.click();
    await pagen.goto('https://www.amazon.in/')
   let amezonsearch =  await pagen.getByPlaceholder('Search Amazon.in')
    await amezonsearch.click()
    await amezonsearch.fill('mobiles');
    await pagen.keyboard.press('Enter')


    // await pagen.getByRole('button',{name:'Go'}).click();

    
})