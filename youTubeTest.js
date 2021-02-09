const { Builder, By } = require("selenium-webdriver");
require("chromedriver");

async function youTubeTest() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://www.google.com");
    await driver.findElement(By.name("q")).sendKeys("Donut", Key.RETURN);
};

youTubeTest();