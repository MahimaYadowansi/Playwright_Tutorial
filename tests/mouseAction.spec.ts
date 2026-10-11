import{test,expect} from '@playwright/test'

test("Mouse Action in playwright" , async({page})=>
{
 await page.goto("https://www.google.com/search?q=playwight+by+tester+talk");

 //Left button click
 await page.getByRole('link' , {name: 'Playwright by Tester Talk'}).first().click({button:'left'});

 
 //Right button click
 await page.getByRole('link' , {name: 'Playwright by Tester Talk'}).first().click({button:'right'});

 
 //Midle button click
 await page.getByRole('link' , {name: 'Playwright by Tester Talk'}).first().click({button:'middle'});


 //mouse hover
  await page.locator("[aria-label='Search by voice']").hover();


 // Double click
 await page.locator("[aria-label='Search by voice']").dblclick();
 



});