import{test , Page} from '@playwright/test'
test.describe("This is login @somke test",()=>{
    test.describe.configure({
        mode:'serial'});
        test("Invalid login test1", async({page})=>
        {
             console.log("This is invalid test 1");
        });
        test("Invalid login test2", async({page})=>
        {
            console.log("This is invalid login test 2");
        })

});


//To skip the test: .skip
test.describe.skip("This is login @sanity test",()=>{
    test.describe.configure({
        mode:'serial'});
        test("valid login test1", async({page})=>
        {
             console.log("This is valid test 1");
        });
        test("valid login test2", async({page})=>
        {
            console.log("This is valid login test 2");
        })

});

//npx playwright test configureGroup.spec.ts --grep "@sanity"
