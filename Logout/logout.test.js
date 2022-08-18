const expectChai = require('chai').expect;
let { userName, password  } = process.env;
describe('login into portal : ', async ()  => {
    it('Login into the kredily Portal',  async () => {
      await browser.url("company/dashboard/");
      await $(".//img[@class='logo']//following::img[@class='logo'][1]").waitForDisplayed({ timeout: 10000 });
      await $(".//button[contains(text(),'Sign In')]//preceding::input[4]").click();
      await $(".//button[contains(text(),'Sign In')]//preceding::input[4]").setValue(
        userName
    );
    await $(".//button[contains(text(),'Sign In')]//preceding::input[3]").click();
    await $(".//button[contains(text(),'Sign In')]//preceding::input[3]").setValue(
      password
    );
    await browser.pause(500);
    await $(".//button[contains(text(),'Sign In')]").click();
    await browser.pause(1000);
    await $(".//h1[text()='Hi Rahul!']").waitForDisplayed({ timeout: 10000 });
    await $(".//*[contains(@class,'clockInBtn')][contains(@class,'clockInRed')]").waitForDisplayed({timeout:10000});
    // await $(".//*[contains(@class,'clockInBtn')][contains(@class,'clockInRed')]").click();
    await browser.pause(15000)
    await browser.refresh();
    let element = await $(".//*[contains(@class,'clockInBtn')][contains(@class,'clockInRed')]").isDisplayed();
    expectChai(element).to.equal(false);
    })
  });
