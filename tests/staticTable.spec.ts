import{test , expect ,Locator} from '@playwright/test'
test("Static table" , async({page})=>{
   await  page.goto("https://testautomationpractice.blogspot.com/");

    //1. Capture table 
    const table:Locator= await page.locator("[name='BookTable']");
    await expect(table).toBeVisible();

    //2. count number of rows and columns

    const rows:Locator=await page.locator("[name='BookTable'] tbody tr");
    const numbRows= await rows.count();
    console.log(numbRows);
    
    const cols:Locator=await page.locator("[name='BookTable'] tbody tr th");
    const numbCols=await cols.count();
    console.log(numbCols);

    for(let i=1;i<numbRows;i++)
    {
      const bookName=await rows.nth(i).locator("td").nth(0).textContent();
      if(bookName?.trim()==="Master In Selenium")
      {
        const author=await rows.nth(i).locator("td").nth(1).textContent();
        console.log("The author of master in selenium is : ", author);
        break;
      }

       
    }


})