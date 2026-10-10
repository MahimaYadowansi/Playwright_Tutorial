import {test , expect} from '@playwright/test'
test.describe("Capturing screenshort", ()=>{

test("Capture Element Screenshot" , async({page})=>{
await page.goto("https://www.youtube.com/@testerstalk");

const element=await page.locator("#page-header");
await element.screenshot({path: './Screenshots/ElementScreenshot.png'});

});

test("capture page screenshot" , async({page})=>{
   await page.goto("https://www.youtube.com/@testerstalk")
  
    await page.screenshot({path: './Screenshots/PageScreenshot.png'});


});

test("capture full page screenshot" , async({page})=>{
   await page.goto("https://www.youtube.com/@testerstalk");
   await page.screenshot({path: './Screenshots/FullPageScreenshot.png' , fullPage: true});

});



});