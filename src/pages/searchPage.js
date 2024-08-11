import { By, until } from 'selenium-webdriver';
import { searchObject } from '../selector/searchObject.js';

class SearchPage {
    constructor(driver) {
      this.driver = driver;
      this.url = 'https://www.ebay.com';
    }
    async open() {
      await this.driver.get(this.url);
    }
    async getTextTitleProductbyIndex(index) {
        const element = await this.driver.findElement(By.xpath(searchObject.titleProductbyIndex(index)));
        return await element.getText();
    }
    async waitPageLoads(index) {
      await this.driver.wait(until.elementLocated(By.xpath(searchObject.titleProductbyIndex(index))), 10000);
    }

  }
export default SearchPage;