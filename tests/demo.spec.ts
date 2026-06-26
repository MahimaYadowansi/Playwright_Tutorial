import{test , expect} from '@playwright/test'

// fixture ->Page , browser

test("Verify page title" , async({page})=>
{
  await page.goto("https://testautomationpractice.blogspot.com/");
  let title:string = await page.title();
  await expect(page).toHaveTitle("Automation Testing Practice");
  console.log("Title of page is : ",title);
  //To run in specific browser use command npx playwright test demo.spec.ts --project=chromium
  //To run test base on test name -> npx playwright test -g "Verify page title"
  //To open playwright UI -> npx playwright test --ui
//To debug -> npx playwright test demo.spec.ts --debug
})
