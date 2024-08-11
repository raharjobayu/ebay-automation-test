import { By, until } from 'selenium-webdriver';
import { cellPhoneAndAccessoriesObject } from '../../selector/categoryPageSelector/cellPhoneAndAccessoriesObject.js';
import chai from 'chai';
const expect = chai.expect;

class CellPhoneAndAccessoriesPage {
    constructor(driver) {
      this.driver = driver;
      this.url = 'https://www.ebay.com/b/Cell-Phones-Smart-Watches-Accessories/';
    }
    async clickLeftNavCategory(category) {
        const categoryLeftNav = await this.driver.findElement(By.xpath(cellPhoneAndAccessoriesObject.categoryLeftNav(category)));
        await categoryLeftNav.click();
    }
    async clickFilter(type) {
      console.log(type);
      const filter = await this.driver.findElement(By.xpath(cellPhoneAndAccessoriesObject.filterButton(type)));
      await filter.click();
    }
    async applyFilters(checkbox,radio,price) {
      if(checkbox.length>=1){
        for(let i=0;i<checkbox.length;i++){
          await this.chooseCheckboxFilter(checkbox[i])
        }
      }
      if(radio.length>=1){
        for(let i=0;i<radio.length;i++){
          await this.chooseRadioButtonFilter(radio[i])
        }
      }
      if(price.length>=1){
        for(let i=0;i<price.length;i++){
          await this.choosePriceFilter(price[i])
        }
      }
    }
    async chooseCheckboxFilter(data){
      const elementTab = await this.driver.findElement(By.xpath(cellPhoneAndAccessoriesObject.filterPopUp.categoryTab(data.filterName)));
      await elementTab.click();

      for(let i=0;i<data.value.length;i++){
        await this.driver.findElement(By.xpath(cellPhoneAndAccessoriesObject.filterPopUp.filterCheckBox(data.value[i]))).click();
      }
    }

    async chooseRadioButtonFilter(data){
      const elementTab = await this.driver.findElement(By.xpath(cellPhoneAndAccessoriesObject.filterPopUp.categoryTab(data.filterName)));
      await elementTab.click();

      const elementRadioButton = await this.driver.findElement(By.xpath(cellPhoneAndAccessoriesObject.filterPopUp.filterRadioButton(data.value)));
      await elementRadioButton.click();
    }

    async choosePriceFilter(data){
      const elementTab = await this.driver.findElement(By.xpath(cellPhoneAndAccessoriesObject.filterPopUp.categoryTab(data.filterName)));
      await elementTab.click();

      const elementMinimumInput = await this.driver.findElement(By.xpath(cellPhoneAndAccessoriesObject.filterPopUp.filterMinimumInput));
      await elementMinimumInput.sendKeys(data.valueMinimum);

      const elementMaximumInput = await this.driver.findElement(By.xpath(cellPhoneAndAccessoriesObject.filterPopUp.filterMaximumInput));
      await elementMaximumInput.sendKeys(data.valueMaximum);
    }

    async applySelectedFilters(){
      const element = await this.driver.findElement(By.xpath(cellPhoneAndAccessoriesObject.filterPopUp.applyButton));
      await element.click();
    }

    formatPriceRange(min, max) {
      const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
      });
  
      const formattedMin = formatter.format(min);
      const formattedMax = formatter.format(max);
  
      return `${formattedMin} to ${formattedMax}`;
    }

    async transformDataFilter(data){
      let checkbox =  data.checkbox;
      let radio = data.radio;
      let price = data.price;
      let dataTransform =[];
      if(checkbox.length>=1){
        for(let i=0;i<checkbox.length;i++){
          for(let j=0;j<checkbox[i].value.length;j++){
            dataTransform.push({
              filterName : checkbox[i].filterName,
              value : checkbox[i].value[j]
            })
          }
        }
      }
      if(radio.length>=1){
        for(let i=0;i<radio.length;i++){
          dataTransform.push({
            filterName : radio[i].filterName,
            value : radio[i].value
          })
        }
      }
      if(price.length>=1){
        for(let i=0;i<radio.length;i++){
          dataTransform.push({
            filterName : price[i].filterName,
            value : this.formatPriceRange(price[i].valueMinimum,price[i].valueMaximum)
          })
        }

      }
      return dataTransform;
    }

    async validateFilter(data){
      const element = await this.driver.findElement(By.xpath(cellPhoneAndAccessoriesObject.filterAppliedDropdown(data.filterName,data.value)));
      const isDisplayed = await element.isDisplayed();
      return isDisplayed;
    }

  }
export default CellPhoneAndAccessoriesPage;