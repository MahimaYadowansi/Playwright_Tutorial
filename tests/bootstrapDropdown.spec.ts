import {test, expect , Locator} from '@playwright/test'
test("Bootstrap dropdown handling:", async({page})=>{

//Auto suggest dropdown

// There are three options 1. Use selector hub debugger 2. Go to devtool->source and click pause button . 3. ctrl+shift+p and type "emulate a focused page "
await page.goto("https://www.flipkart.com/");

const searchbox=await page.getByRole('textbox' , {name:'Search for Products, Brands'});
await searchbox.fill("smart");

 
//Get all test content from list
const dropdownContent= page.locator("ul > li.Swx5kP:visible");
let item=await dropdownContent.count();
for(let i=0 ;i<item;i++)
{
  console.log(dropdownContent.nth(i).allInnerTexts());
}

// //select text from dropdown 
// for(let i=0 ;i<item;i++)
// {
//     const text=await dropdownContent.nth(i).allInnerTexts();
//     if (text[0].trim() === "smart tv")
//     {
//         await dropdownContent.nth(i).click();
//         break;
//     }
// }



const smartTv = dropdownContent.filter({
    hasText: /^smart tv$/i
  });

  await expect(smartTv).toBeVisible();
  await smartTv.click();

});
