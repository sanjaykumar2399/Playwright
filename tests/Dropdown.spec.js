

/*const {test,chromium,expect} = require ('@playwright/test');

test ('xpath', async() => {

    const browser = await chromium.launch({
         headless: false


});

const page = await browser.newpage ();

await page.goto ('https://www.amazon.in/');

await page.waitforTimeout (2000);

constdropop = awaitpage.locater ('#searchdropdown box');

await dropop.SelectOption('computer & accessories');

await page.waitforTimeout (2000);
});*/


const { test, chromium, expect } = require('@playwright/test');

test('xpath', async () => {
    // Launch browser
    const browser = await chromium.launch({
        headless: false
    });

    // Open a new page
    const page = await browser.newPage();

    // Navigate to Amazon India
    await page.goto('https://www.amazon.in/');

    // Wait for the page to load
    await page.waitForTimeout(2000);

    // Locate the dropdown
    const dropDown = await page.locator('#searchDropdownBox');

    // Select option in the dropdown
    await dropDown.selectOption({ label: 'Computers & Accessories' });

    // Wait for a while to observe the change
    await page.waitForTimeout(2000);

    // Close the browser
    await browser.close();
});
