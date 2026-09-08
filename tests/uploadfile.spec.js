import { test } from '@playwright/test'
import path from 'node:path'

test('uploading the file', async ({ page }) => {


    //single file upload
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#singleFileInput').setInputFiles('C:/Users/DELL/Desktop/Ply001/screenshot/{date}.png')
    await page.locator("//button[text()='Upload Single File']").click()

    //single file upload from another folder
    // ~(../) :- which is used to come out of 1 folder
// ~(../../) :- which is used to come out of 2 folders



await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,'../screenshot/ss.png'))
await page.locator("//button[text()='Upload Single File']").click()

await page.locator('#multipleFilesInput').setInputFiles(['C:/Users/DELL/Desktop/Ply001/screenshot/{date}.png','C:/Users/DELL/Desktop/Ply001/screenshot/ss.png'])
await page.locator("//button[text()='Upload Multiple Files']").click()



})