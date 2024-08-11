import { By, until } from 'selenium-webdriver';
import { homeObject } from '../selector/homeObject.js';

class HomePage {
    constructor(driver) {
      this.driver = driver;
      this.url = 'https://www.ebay.com';
    }
    async open() {
      await this.driver.get(this.url);
    }
    async searchByCategory(category) {
        const shopByCategoryButton = await this.driver.findElement(By.xpath(homeObject.shopbyCategoryButton));
        await shopByCategoryButton.click();

        const categoryElement = await this.driver.findElement(By.xpath(homeObject.categoryType(category)));
        await categoryElement.click();
    }
    async inputSearch(text) {
      const element = await this.driver.findElement(By.xpath(homeObject.searchInput));
      await element.sendKeys(text);
    }
    async submitSearch() {
      const element = await this.driver.findElement(By.xpath(homeObject.searchButton));
      await element.click();
    }
    async chooseSearchCategory(category) {
      const element = await this.driver.findElement(By.xpath(homeObject.searchCategoriesDropdown(category)));
      await element.click();
    }

  }
export default HomePage;