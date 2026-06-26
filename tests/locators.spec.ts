import { test , expect, Locator } from '@playwright/test'
test("Locators of playwright " ,async ({page})=>{
    //page.getByRole() 
    await page.goto("https://testautomationpractice.blogspot.com/");
   const buttonloc=page.getByRole('button', { name: 'START' });
   await buttonloc.hover();
   await buttonloc.click();

   //await page.getByRole('link',{name: 'Home'}).click();

   //page.getByPlaceholder
   await page.getByPlaceholder('Enter Phone').fill("9875678765");

   //page.getByText()
   //await expect(page.getByText('Data Entry Form')).toBeVisible;
   const text:Locator=page.getByText('Data Entry Form');
   await(expect(text)).toBeVisible;

   //page.getByTitle()
   await expect(page.getByTitle('Dynamic Button')).toBeVisible;


   //Page.getById()
   //await page.getByTestId('email').fill("mahimayadowansi@gmail.com");

   //page.getByAltText()
   await page.goto("https://playwright.dev/docs/locators");
   await expect( page.getByAltText("Playwright logo")).toBeVisible;

   
  

})


