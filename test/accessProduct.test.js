import { getDriver } from '../helper/helpers.js';
import HomePage from '../src/pages/homePage.js';
import SearchPage from '../src/pages/searchPage.js';
import CellPhoneAndAccessoriesPage from '../src/pages/categoryPage/CellPhoneAndAccessoriesPage.js';
import {popupFilterData} from './accessProduct.data.js';
import chai from 'chai';
const expect = chai.expect;
describe('Access a Product via category after applying multiple filters', function() {
    this.timeout(0);
    let driver;
    let homePage;
    let cellPhoneAndAccessoriesPage;

    before(async function() {
        driver = await getDriver();
        homePage = new HomePage(driver);
        cellPhoneAndAccessoriesPage = new CellPhoneAndAccessoriesPage(driver);
    });

    after(async function() {
        // Ensure WebDriver quits to close the browser session
        await driver.quit();
    });

    it('user able to search Cell Phones & accessories product and filter data', async function() {
        // Open the home page to start the user journey from the home page
        await homePage.open();
        await homePage.searchByCategory('Cell phones & accessories');

        await cellPhoneAndAccessoriesPage.clickLeftNavCategory('Cell Phones & Smartphones');
        await cellPhoneAndAccessoriesPage.clickFilter('All Filters');
        // Apply checkbox, radio button, and price type filters to narrow down search results
        await cellPhoneAndAccessoriesPage.applyFilters(popupFilterData.checkbox,popupFilterData.radio,popupFilterData.price);
        await cellPhoneAndAccessoriesPage.applySelectedFilters();
        // Transform filter data to verify applied filters are displayed correctly
        const transformData = await cellPhoneAndAccessoriesPage.transformDataFilter(popupFilterData);
        await cellPhoneAndAccessoriesPage.clickFilter(transformData.length + ' filters applied');
        // Validate each applied filter is displayed on the page
        for(let i=0;i<transformData.length;i++){
            const isDisplayed = await cellPhoneAndAccessoriesPage.validateFilter(transformData[i]);
            expect(isDisplayed).to.be.true;
        }
    });
});

describe('Access a Product via Search', function() {
    this.timeout(0);
    let driver;
    let homePage;
    let searchPage;

    before(async function() {
        driver = await getDriver();
        homePage = new HomePage(driver);
        searchPage = new SearchPage(driver);
    });

    after(async function() {
        // Ensure WebDriver quits to close the browser session
        await driver.quit();
    });

    it('user able to search macbook with filters Computers/Tablets & Networking', async function() {
        // Open the home page to start the user journey from the home page
        await homePage.open();
        await homePage.inputSearch('macbook');
        await homePage.chooseSearchCategory('Computers/Tablets & Networking');
        await homePage.submitSearch();
        // Wait for the search results to load before verifying them
        await searchPage.waitPageLoads(1);
        // Verify the first result contains the search term to ensure relevance by index
        const titleText = await searchPage.getTextTitleProductbyIndex(1);
        expect(titleText.toLowerCase()).to.include('macbook');
    });
});