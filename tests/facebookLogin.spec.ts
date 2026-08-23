import{test , expect , Locator} from '@playwright/test'
test.beforeEach("Facebook Login" ,async({page})=>{
  await page.goto("https://www.facebook.com/");
})
 test("Execute steps", async({page})=>{
  await page.getByPlaceholder("Email address or mobile number").fill("mahimaKumari");
  await page.waitForTimeout(2000);
  await page.locator("//input[@name='pass']").fill("123");
  
  const loginbtn= await page.locator("//span[text()='Log in']");
 
  await loginbtn.click();
 })

 test.afterEach("Print output", async()=>{
  console.log("Login successfull");

})