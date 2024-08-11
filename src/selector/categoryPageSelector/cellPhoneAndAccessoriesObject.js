export const cellPhoneAndAccessoriesObject = {
    categoryLeftNav : category => `//div[@id = "leftnav"]//*[text()='${category}']`,
    filterButton: type => `//ul//li//*[contains(text(),'${type}')]`,
    filterPopUp :{
        categoryTab : category => `//div[@role='tab']//*[text()='${category}']`,
        filterCheckBox : category => `//div[@id = 'c3-subPanel']//*[text()='${category}']`,
        filterMinimumInput : `//input[contains(@aria-label, 'Minimum Value')]`,
        filterMaximumInput : `//input[contains(@aria-label, 'Maximum Value')]`,
        filterRadioButton : value => `//div[@id = 'c3-subPanel']//input[@aria-label = '${value}']`,
        selectedFilterButton : filter => `//div[@id = 'innerlayer']//*[text()='${filter}']`,
        applyButton : `//button[text()= 'Apply']`
    },
    filterAppliedDropdown : (type,value) => `//ul//li//*[contains(text(),'filters applied')]/../following-sibling::*//*[contains(text(),'${type}: ${value}')]`
};