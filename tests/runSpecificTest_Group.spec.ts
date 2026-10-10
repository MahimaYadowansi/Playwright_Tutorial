import{test , Page} from '@playwright/test'
//run specific categories of tests, Playwright supports tags.

test("Test @smoke",async({page})=>
{
    console.log("This os smoke test");
});
test("Test @smoke and @regression", async({page})=>
{
  console.log("This is smoke and regression test");
});

test("This is @regression and @sanity test", async({page})=>{
    console.log("This is regression and sanity test");
});

test("This is @systemTest" ,async({page})=>{
    console.log("This is system test");
});

//npx playwright test --grep "@smoke"