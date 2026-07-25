import{test , expect , Locator} from '@playwright/test'
test("comparing methods",async({page})=>{
   await page.goto("https://demowebshop.tricentis.com/");
    const products:Locator=page.locator(".product-item");
    //innerText() vs textContent()
     //let inner= await products.nth(1).innerText();
    //let content=await products.nth(1).textContent()
    //Simple way to print
   // console.log(inner);
    //console.log(content);

    //Using for loop
    const count=await products.count();
    for(let i=0;i<count;i++)
    {
        console.log(await products.nth(i).innerText);
    }

//innerText(): Return String -> return first found element
//allInnerTexts(): Return String[] ->return all text
//textContent(): Return string|null
//allTextContents(): return string[]

// all(): capture all element locator and which is stored in array
const productLocators: Locator[]=await products.all();
console.log(productLocators); // print locators
 console.log(await productLocators[1].innerText()); //print first value
//Now it is array now we can use for--of loop
 console.log("------Printing for of loop---------");
for(let prodLoc of productLocators)
{
    console.log(await prodLoc.innerText());
}
 console.log("----------Printing for in loop--------");

//Now for --in loop to work with index
for(let i in productLocators)
{
    console.log(await productLocators[i].innerText());
}


})