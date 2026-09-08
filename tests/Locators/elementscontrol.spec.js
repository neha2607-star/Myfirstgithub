import { test } from '@playwright/test';

test('element controls', async ({ page }) => {

  // Element controls are the special methods used to perform actions on elements.

  await page.goto('https://demoapps.automationtesting.in/Register.html'); // (URL may differ slightly in your image)

  // fill() - Used to enter data into the input field.
  await page.getByPlaceholder('Enter your name').fill('akhila');
  await page.getByPlaceholder('Enter your name').fill('tom');

  // type() - Similar to fill(), but it is deprecated.
  await page.getByPlaceholder('Enter Your Email').type('akhila@gmail.com');
  await page.getByPlaceholder('Enter Your Email').type('tom@gmail.com');

  // inputValue() - Returns the value from the input box.
  let data = await page.getByPlaceholder('Enter Your Email').inputValue();
  console.log(data);

  // innerText() - Returns the visible text.
  let text = await page.getByText('Text Field').nth(2).innerText();
  console.log(text);

    // textContent() - Returns the text content.
  let textContent = await page.getByText('Text Field').first().textContent();
  console.log(textContent);

  // allInnerTexts() - Returns an array of inner texts of all matching elements.
  let all = await page.getByText('Text Field').allInnerTexts();
  console.log(all);

  // allTextContents() - Returns an array of text contents of all matching elements.
  let all2 = await page.getByText('Button').allTextContents();
  console.log(all2);

  // all() - Returns all matching locators.
  let locators = await page.getByText('Button').all();
  console.log(locators);

});