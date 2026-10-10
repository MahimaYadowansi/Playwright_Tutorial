import{test , expect} from '@playwright/test'
import{mkdir} from 'node:fs/promises'

//Run before all method once
test.beforeAll("Creating folder to store screenshot", async()=>{
  console.log('BEFORE ALL: Preparing test environment');
  await mkdir('./Screenshots', {recursive:true});
});


//Run before each function
test.beforeEach("Navigating to url before all " ,async({page})=>{

    await page.goto("https://www.youtube.com/@testerstalk");
});
test.describe("Capturing screenshort", ()=>{

test("Capture Element Screenshot" , async({page})=>{


const element=await page.locator("#page-header");
await element.screenshot({path: './Screenshots/ElementScreenshot.png'});

});

test("capture page screenshot" , async({page})=>{
  
  
    await page.screenshot({path: './Screenshots/PageScreenshot.png'});


});

test("capture full page screenshot" , async({page})=>{
   
   await page.screenshot({path: './Screenshots/FullPageScreenshot.png' , fullPage: true});

});



});

// Runs after every test, whether it passes or fails
  test.afterEach('Report test result', async ({}, testInfo) => {
    if (testInfo.status === testInfo.expectedStatus) {
      console.log(`PASSED: ${testInfo.title}`);
    } else {
      console.log(`FAILED: ${testInfo.title}`);
    }
  });
  
test.afterAll('Finish screenshot tests', async () => {
    console.log('Screenshot test suite execution finished.');
  });