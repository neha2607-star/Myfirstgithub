import { test } from '@playwright/test'

test('', async ({ page }) => {

    // await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
    // await page.getByRole('button', { name: 'Yes' }).click()
    // print the text which you will get after clicking on the button

    // await page.goto('https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1')
    // to click on a right button
    // await page.getByRole('button', { name: 'Right Click' }).click({ button: 'right' })

    // await page.goto('https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2')
    // to click on a button 2 times we can use clickCount or dblclick
    // await page.getByRole('button', { name: 'Yes' }).click({ clickCount: 2 })
    // await page.getByRole('button', { name: 'No' }).dblclick()

    // await page.goto('https://demoapps.qspiders.com/ui/mouseHover?sublist=0')
    // to hover on a particular element
    // await page.locator('//img[@class="w-5 h-5 md-5 ml-3 cursor-pointer"]').hover()

    // await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0')
    // await page.locator('#circle').hover()
    // to hold on the element
    // await page.mouse.down()
    // await page.waitForTimeout(2000)
    // to release the element
    // await page.mouse.up()
    // await page.waitForTimeout(2000)


// await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
// await page.locator('//div[text()="Mobile Charger"]').hover()
// await page.mouse.down()
// await page.locator('//div[@class="drop-column min-h-[200px] bg-slate-100"]').hover()
// await page.mouse.up()
// await page.waitForTimeout(3000)


// let target = await page.locator('//div[text()="Mobile Charger"]')
// let element = await page.locator('//div[@class="drop-column min-h-[200px] bg-slate-100"]')
// drag to the targeted element
// await target.dragTo(element)
// await page.waitForTimeout(3000)

// await page.goto('https://demoapps.qspiders.com/ui/dragDrop?sublist=0')
// await page.locator('//div[text()="Drag Me"]').hover()
// await page.mouse.down()
// await page.mouse.move(100,200)
// await page.mouse.up()
// await page.waitForTimeout(3000)

// await page.goto('https://www.myntra.com/')
// it resembles the wheel
// if we wanted to scroll vertically then we have to give the x axis 0
// if we wanted to scroll horizontally we have to give y axis as 0
// await page.mouse.wheel(0,3000)
// await page.waitForTimeout(5000)

// to move upwards we can give -ve values
// await page.mouse.wheel(0,-1000)
// await page.waitForTimeout(5000)

await page.goto('https://www.amazon.in/')

// scrolls upto the mentioned element
await page.locator('//img[@class="product-image"]').first().scrollIntoViewIfNeeded()
await page.waitForTimeout(3000)
})

