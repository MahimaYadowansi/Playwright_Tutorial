import{test,expect} from '@playwright/test'

test.describe("Keyboard keys in playwright" , ()=>
{
test("Keyboard actions-Enter" ,async({page})=>
{
    await page.goto("https://www.google.com/");
     page.locator("[aria-label='Search']").fill("Playwright");
     const search=await page.locator("[aria-label='Search']");
     search.fill("Playwright");
     search.press('Enter');
    });

    test("Keyboard actions-SelectAll" ,async({page})=>
{
    await page.goto("https://www.google.com/");
     page.locator("[aria-label='Search']").fill("Playwright");
     const search=await page.locator("[aria-label='Search']");
     search.fill("Playwight");

     //Select all
     search.press('Control+A');

     //Type in current focused element
     await page.keyboard.type('Playwright with TypeScript');

     //Press Enter
     await search.press('Enter');
     
    });


    test("Keyboard actions-Backspace" ,async({page})=>
{
    await page.goto("https://www.google.com/");
     page.locator("[aria-label='Search']").fill("Playwright");
     const search=await page.locator("[aria-label='Search']");
     search.fill("Playwright");
     search.press('Control+A');
     search.press('Backspace');
    });
});
