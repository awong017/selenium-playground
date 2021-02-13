const { Builder, By, Key, Until} = require("selenium-webdriver");
require("chromedriver");

async function amazonTest() {
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("https://www.amazon.com");
    await driver.findElement(By.id("twotabsearchtextbox")).sendKeys("Manscape", Key.RETURN);
    await driver.close();
};

amazonTest()