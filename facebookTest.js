const { Builder, By, Key, Until } = require("selenium-webdriver");
require("chromedriver");

async function facebookTest() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.facebook.com");
    await driver.findElement(By.id("email")).sendKeys("na");
    await driver.findElement(By.id("pass")).sendKeys("na");
    await driver.quit();
};

facebookTest();
