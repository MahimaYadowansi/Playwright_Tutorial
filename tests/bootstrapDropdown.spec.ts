import {test, expect , Locator} from '@playwright/test'
test("Bootstrap dropdown handling:", async({page})=>{

//Auto suggest dropdown

// There are three options 1. Use selector hub debugger 2. Go to devtool->source and click pause button . 3. ctrl+shift+p and type "emulate a focused page "
await page.goto("https://www.flipkart.com/");
const searchbox:Locator= page.locator("//input[@name='q' and @title='Search for products, brands and more']");
 await expect(searchbox).toBeVisible();
 await searchbox.fill("smart");
 await page.waitForTimeout(2000);
 
//  const suggestive_dropdown:Locator=page.getByRole("listitem").filter({hasText:'smart tv'});
//  suggestive_dropdown.click();
//  await page.waitForTimeout(2000);
//  console.log("smart Tv clicked");

//Get all test content from list
const dropdownContent= page.locator("ul>li");
let item=await dropdownContent.count();
for(let i=0 ;i<item;i++)
{
  console.log(dropdownContent.nth(i).allInnerTexts());
}

//select text from dropdown 
for(let i=0 ;i<item;i++)
{
    const text=await dropdownContent.nth(i).allInnerTexts();
    if (text[0].trim() === "smart tv")
    {
        await dropdownContent.nth(i).click();
        break;
    }
}


});
