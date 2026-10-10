import{test , expect , Locator} from '@playwright/test'
test("Login in Orange HRM",async({page})=>{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    let username=page.getByPlaceholder('Username');
    await username.fill("Admin");
    let password=page.getByPlaceholder('Password');
    await password.fill('admin123');
    await page.locator("//button[@type='submit']").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    //Handling Alert
    page.on('dialog', async(dialog)=>{
        await expect(dialog.message()).toBe('Change your password');
        await page.waitForTimeout(2000);
        await dialog.accept();
        await page.waitForTimeout(2000);
    })

     await page.getByText('PIM').click();
     //Click job details:
     console.log("Clicked PIM");

    //  await page.locator("(//input[@placeholder='Type for hints...'])[1]").fill("p");
    //  await page.locator("//div[@role='listbox']//div//span[text()='Peter Mac Anderson']").click();
    //  console.log("Entered employee name");
    //  await page.locator("(//div[text()='-- Select --'])[3]").click();
    //  page.waitForTimeout(3000);
    //  const alljobs=await page.locator("//div[@role='option']//span").innerText();
    //  console.log(alljobs);
    
    //  await page.locator("//div[@role='option']//span[text()='HR Manager']").click();
     
    //  console.log("Job is clicked");
     


    
  
});
