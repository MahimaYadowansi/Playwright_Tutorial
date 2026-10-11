import{test , expect} from '@playwright/test'

test.beforeEach("Navigate to URL" , async({page})=>
{
    page.goto("https://testautomationpractice.blogspot.com/");
});

test.describe("Date Pickers in Playwright" , ()=>{

//Enter date in text

test("Enter date in mm/dd/yyyy format in textbox" , async({page})=>
{
  const textDate= page.locator("[id='datepicker']");
  await textDate.fill("08/27/1999");
  await expect(textDate).toHaveValue("08/27/1999");
});

//Enter date by click calender which have month and year dropdown

 test('Select date using calendar dropdowns', async ({ page }) => {
    

    // Open the date picker
    await page.locator('#txtDate').click();

    // Locate the visible calendar
    const calendar = page.locator('#ui-datepicker-div');

    // Select year
    await calendar.locator('.ui-datepicker-year').selectOption('2025');

    // Select August (month index starts at 0)
    await calendar.locator('.ui-datepicker-month').selectOption('7');

    // Select day 27
    await calendar.locator('td[data-handler="selectDay"] a')
        .filter({ hasText: /^27$/ })
        .click();

    // Verify selected date
    await expect(page.locator('#datepicker'))
        .toHaveValue('08/27/2025');
});


});