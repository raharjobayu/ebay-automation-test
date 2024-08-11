export const homeObject = {
    shopbyCategoryButton : `//button[@id = "gh-shop-a"]`,
    categoryType: category => `//table[@id='gh-sbc']//a[text()='${category}']`,
    searchInput : `//input[@id='gh-ac']`,
    searchButton : `//input[@id='gh-btn']`,
    searchCategoriesDropdown : category => `//select[@id='gh-cat']//option[contains(text(),'${category}')]`
};