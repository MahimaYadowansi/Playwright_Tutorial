import{test , expect} from '@playwright/test'
test("Handling drag and drop in Iframe" , async({page})=>
{
    await page.goto("https://jqueryui.com/droppable/");

   //iframe
    const iframe=page.frameLocator("//iframe[@class='demo-frame']");

    // drag and drop elements

    const source= iframe.locator("[id=draggable]");
    const destination= iframe.locator("[id=droppable]");
    await source.dragTo(destination);
})