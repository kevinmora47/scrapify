import { Builder, By, Key, until } from 'selenium-webdriver';
import 'chromedriver';

(async function navigateToContactUs() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navigate to the page
    await driver.get('https://totemcr.com/');

    // Click on the "Contact Us" link on the navbar
    const contactUsLink = await driver.findElement(
      By.xpath('//a[contains(text(), "Contact Us")]')
    );
    await contactUsLink.click();

    //Fill out the form:
    await driver.findElement(By.id('name')).sendKeys('John Doe');
    await driver.findElement(By.id('email')).sendKeys('john@doe.com');
    await driver.findElement(By.id('phone')).sendKeys('+50688888888');
    await driver.findElement(By.id('message')).sendKeys('Testing message');
    await driver.findElement(By.id('submit_btn')).click();
  } finally {
    // Quit the driver
    await driver.quit();
  }
})();
