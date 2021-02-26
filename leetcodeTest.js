const { Builder, By, Keys, Until } = require("selenium-webdriver");
require("chromedriver");

async function leetcodeTest() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.leetcode.com");
    await driver.findElement(By.id("q"));
    await driver.quit();
};

leetcodeTest()
