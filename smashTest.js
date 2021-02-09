const { Builder, By, Key, until } = require("selenium-webdriver");
require("chromedriver");

async function smashLogin() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://smash-ult-stats-tracker-aruj0k060.vercel.app/");
    await driver.findElement(By.linkText("Login")).click();
    await driver.findElement(By.className("name-input")).sendKeys("awong017");
    await driver.findElement(By.className("password-input")).sendKeys("awong017");
    await driver.findElement(By.className("login-button")).click();
}
smashLogin();