import{test , expect , Locator} from '@playwright/test'

test.describe("Visual testing", ()=>{

test("Comparing page screenshot",async({page})=>{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   //At first it gets fail and take screenshot of page and on next run it compare the page with existing screenshot.
   await expect(page).toHaveScreenshot("HRM_Login.png");

    let username=page.getByPlaceholder('Username');
    await username.fill("Admin");
    //This will fail as both screenshot are not same , we have entered value.
    await expect(page).toHaveScreenshot("HRM_Login.png");

});

test("Comparing element screenshot",async({page})=>{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    let usernameField=page.locator('.orangehrm-login-form');
   //At first it gets fail and take screenshot of page and on next run it compare the page with existing screenshot.
   await expect(usernameField).toHaveScreenshot("element.png");

   let username:Locator =page.getByPlaceholder('Username');
    await username.fill("Admin876");
    //This will fail as both screenshot are not same , we have entered value.
    await expect(usernameField).toHaveScreenshot("element.png");

});

});

