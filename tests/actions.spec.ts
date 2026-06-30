import{test , expect, Locator} from '@playwright/test'
//Action - Fill , Checkbox , radiobutton, Select
test('Action-Fill , Checkbox , radio, select: ' , async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/");
 await expect(page).toHaveTitle('Automation Testing Practice');
 
 //await page.getByPlaceholder('Enter Name').fill('Mahima Yadowansi');

 //1. Inputbox -----
 const textbox:Locator=page.locator('#name');
  await expect(textbox).toBeVisible();
  await expect(textbox).toBeEnabled();
  const maxlength:string|null= await textbox.getAttribute('maxlength');
  expect(maxlength).toBe('15');

  textbox.fill('Mahima yadowansi');
  console.log("The input value of first name: ",textbox.inputValue());  //Capture user input value.
  await page.waitForTimeout(3000);

 }) 

 //2. Radio button -----

 test('Radio buttons: ', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
//  await page.locator("//input[@value='sunday']").check();
//  await page.getByRole('checkbox' , {name:'Tuesday'}).check();
 //await page.getByRole('radio' ,{name: 'Female'}).check();

 const radiobtn=page.getByRole('radio' ,{name: 'Female'});
 radiobtn.check();
 expect(await radiobtn).toBeChecked();
 //expect(await radiobtn).toBe('true');
 await page.waitForTimeout(3000);

 })

//3. Check box----
  test('checkbox :' ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const checkbox:Locator=page.getByRole('checkbox',{name:'Sunday'});
    checkbox.check();
    expect(checkbox).toBeChecked();
    await page.waitForTimeout(3000);

// select all checkbox and assert it
  //capture all checkbox
  const  days :string[]=['Sunday', 'Monday' , 'Tuesday' ,'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const checkboxes:Locator[] =days.map(index=>page.getByLabel(index));
  expect(checkboxes.length).toBe(7);

  //check all check boxes
  for(const checkbox of checkboxes)
  {
     await checkbox.check();
  }
  

  await page.waitForTimeout(3000);

  for(const checkbox of checkboxes.slice(-3))
  {
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();

  }
   await page.waitForTimeout(3000);

   //Select the checkboxes which are not selected and unselect the checkbox which are selected.
  for(const checkbox of checkboxes)
  {
    if(await checkbox.isChecked())
    {
       await checkbox.uncheck();
       await expect(checkbox).not.toBeChecked();
       
    }
    else{
      await checkbox.check();
      await expect(checkbox).toBeChecked();
    }
    await page.waitForTimeout(1000);
  }

  //Randomly check 1,3,6 checkbox
  const indexes:number[]=[1,3,6];
  for(const i of indexes)
  {
     await checkboxes[i].check();
     await expect(checkboxes[i]).toBeChecked();
  
  }

  //select checkbox based on lable
  const weekname:string='Friday';
  
    if(days.includes(weekname))
    {
      console.log("Friday is present");
    }
    else{
      console.log("Friday is not present");
    }
  

  })


  






