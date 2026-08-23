import{test , expect ,  Page} from '@playwright/test'
test.beforeEach("Run this test before all methods" , async({page})=>
{
  console.log("This is before method test.")
});

test.describe("This is group1 test", ()=>
{
    test("This is 1st test", async({page})=>{
        console.log("This is group1->1st test")
    });

    test("This is 2nd test",async({page})=>{
        console.log("This is just group1->2nd test")
    });
});


test.describe("This is Group2", ()=>{
  test("This is group2", async({page})=>{
    console.log("This is group2 test")
  });
});


test.afterEach("Run this test after all methods", async({page})=>
{
    console.log("This is after test methods")
});