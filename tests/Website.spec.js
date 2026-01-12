// ...existing code...
import { test, expect } from '@playwright/test';
import PageFile from '../PageObjectModelDemoPageFile/PageFile.js';

test("Open Website", async ({ page }) => {

    const website = new PageFile(page);
    await page.goto('https://practicesoftwaretesting.com/');
   await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0", { timeout: 15000 });

    console.log("Website is opened");
    await page.waitForTimeout(3000);
    await website.SearchBox();
    await page.waitForTimeout(2000);
    await website.fillSearchBox("pliers");
    await page.waitForTimeout(2000);
    await website.pressEvent('keyboard', 'Enter');
    await page.waitForTimeout(5000);
    await expect(website.ResultsText).toHaveText('pliers');
    console.log("Search results are displayed");

});
// ...existing code...