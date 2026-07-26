import{test, expect , Locator} from '@playwright/test'
test("Dynamic table",async({page})=>{
  await  page.goto("https://testautomationpractice.blogspot.com/");
  const table:Locator=page.locator("[name='BookTable'] tbody");
  const rows = table.locator("tr");
  const headers = table.locator("tr th");
  //Counting rows and cols

  const rowCount= await rows.count();
  const headerCount=await headers.count();

  let bookCol = -1;
  let authorCol = -1;

  //Finding book and author index

  for(let i=0;i<headerCount;i++)
  {
    const header=(await headers.nth(i).textContent())?.trim();
    if(header==="BookName")
    {
        bookCol=i;
    }
    if(header==="Author")
    {
       authorCol=i;
    }

  }

  // Seraching rows
  for(let i=1;i<rowCount;i++)
  {
    const bookName=(await rows.nth(i).locator("td").nth(bookCol).textContent())?.trim();
    if(bookName==="Master In Selenium")
    {
        const author=(await rows.nth(i).locator("td").nth(authorCol).textContent())?.trim();
        console.log("The author is master in selenium is: ", author);
        break;
    }

  }
   
  
})