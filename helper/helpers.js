import { Builder } from 'selenium-webdriver';

export async function getDriver() {
  const driver = await new Builder().forBrowser('chrome').build();
  await driver.manage().window().maximize();
  await driver.manage().setTimeouts({ implicit: 5000 });
  return driver;
}