/*const{test,chromium,} = require ('@playwright/test');

test ('launching the application url',async()=>{

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('https://www.amazon.in/');

});

//sconst {test,chromium,expect} = require ('@playwright/test')

const { test, chromium } = require('@playwright/test');

test('launching the application URL', async () => {
  // Launch the browser
  const browser = await chromium.launch();

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the Amazon India homepage
  await page.goto('https://www.amazon.in/');

  // You can add assertions here if needed, for example:
  // await expect(page).toHaveTitle(/Amazon/);

  // Close the browser after the test
  await browser.close();
});*/




const {test,chromium,expect} = require('@playwright/test');

test ('launching the application url',async () => {
    const browser = await chromium.launch({
        headless : false

    });

const context = await browser.newcontext();
const page = await context.newpage();
const url = 'https://www.youtube.com/';
await page.goto (url);

await execpt (page).toHaveURL(url);
await execpt (page).toHaveTitle('YouTube');

await page.goto ('https://www.facebook.com/login.php/');

await page.goBack();

await page.goForward();

await execpt(page).toHaveURL('https://www.facebook.com/login.php/');

await page.waitForTimeout(5000);

const page2 = await context.newpage();
await page2.goto('https://www.flipkart.com/');

await page.waitForTimeout(5000);

const context2 = await browser.newcontext();
const page3 = await context2.newpage();

await page3.goto('https://www.amazon.in/');

await page.waitForTimeout(5000);

});

const btn = await = await page.getbyText('creat account');
await btn.click();



