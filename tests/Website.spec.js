import { test, expect } from '@playwright/test';
import PageFile from '../PageObjectModelDemoPageFile/PageFile.js';
import testData from '../dataFile/testData.json'; 

let website;

test.beforeEach(async ({ page }) => {
  website = new PageFile(page);
  await page.goto(testData.website.url);
});

test("Check Title of the Website", async ({ page }) => {
  await expect(page).toHaveTitle(testData.website.title, { timeout: 15000 });
  console.log("Title is verified");
});

test("Check URL of the Website", async ({ page }) => {
  await expect(page).toHaveURL(testData.website.url);
  console.log("URL is verified");
});

test("Find and Text in Search Box", async ({ page }) => {
  await website.SearchBox();
  await website.fillSearchBox(testData.search.text);
  await website.pressEvent('keyboard', 'Enter');
  await page.waitForTimeout(2000);
  await expect(website.ResultsText).toHaveText(testData.search.expectedResult);
  console.log("Search results are displayed");
});


test.only('Select nested checkbox using fieldset', async ({ page }) => {

  await website.selectNestedCheckbox(
    testData.filters.parent,
    testData.filters.child
  );

  // Assertion (optional but recommended)
  const selectedCheckbox = page
    .locator('label', { hasText: testData.filters.child })
    .locator('input');

  await expect(selectedCheckbox).toBeChecked();
});
