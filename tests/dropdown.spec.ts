import{test, Page , Locator, expect} from '@playwright/test'
// Static Single select dropdown
test("Single/Multi-Select dropdown",async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/");

  //Four different ways to select from dropdown

  //1. 

  await page.locator('#country').selectOption('India');      //visible text
  // await page.locator('#country').selectOption({value:'usa'});     //using value
  // await page.locator('#country').selectOption({label:'United States'});  //using label
  // await page.locator('#country').selectOption({index:3});
  //
  // await page.waitForTimeout(2000);

// 2. check number of option on dropdown
 
//Option 1:
 //console.log("The number of element in dropdown are: ",await page.locator("//select[@id='country']//option").count());
 
 //option 2:
  const dropdowncount:Locator=page.locator("#country>option");
  console.log(await dropdowncount.count());
  await expect(dropdowncount).toHaveCount(10);


  // 3. Find each element of dropdown and print it
  const option= await dropdowncount.all();
  for(const country of option)
  {
    console.log(await country.textContent());
    
  }
  
   
  //Check option is present in dropdown using loop

  //  for(const optionValue of option)
  //  {
  //   const text = await optionValue.textContent();
  //   if(text?.trim() === 'India')
  //   {
  //     console.log("India found")
  //     break;
  //   }
  //  }

   // or in simple way:

   const text:string[]= (await dropdowncount.allTextContents()).map(text=>text.trim());
   await expect(text).toContain('India');


   //To test dropdown is sorted or not or have duplicate or not

   const colourDropdown:Locator= page.locator('#colors>option');
   const colourtext:string[]=(await colourDropdown.allTextContents()).map(colourtext=>colourtext.trim());
   console.log(colourtext);

   //Verify sorting
   const sortedColour=[...colourtext].sort((a,b)=>a.localeCompare(b));
   console.log(sortedColour);
    await expect.soft(sortedColour,"Dropdown values are not sorted alphabetically.").toEqual(colourtext);

    //or
    const sortedColour1=[...colourtext].sort();
    console.log(sortedColour1);
    expect(colourtext).toEqual(sortedColour1);
    

   //verify duplicate
   await expect.soft(new Set(colourtext).size, "Colour dropdown has duplicate colours").toBe(colourtext.length);

   //Print which value is duplicate
   console.log("check duplicate");
   const duplicate=colourtext.filter((item,index)=>colourtext.indexOf(item)!==index);
   console.log("Duplicate value: ",[...new Set(duplicate)]);


   //multi-select dropdown
   const multiDropdown:Locator= page.locator("#animals");
   await multiDropdown.selectOption([{label:'Dog'},{label:'Deer'},{label:'Cheetah'}]);
   await expect(multiDropdown).toHaveValues(["cheetah","deer","dog"]);
   console.log("Multiple animals selected");
   
})