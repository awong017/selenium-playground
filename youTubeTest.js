const { Builder, By, Key, Until } = require("selenium-webdriver");
require("chromedriver");

async function youTubeTest() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.youtube.com");
    await driver.findElement(By.name("search_query")).sendKeys("Donut Media", Key.RETURN);
    await driver.findElement(By.id("avatar")).click();
    await driver.close();
};

youTubeTest();