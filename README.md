# ebay-automation-test
This repository contains frontend automation scripts using Mocha. The frontend automation leverages Selenium WebDriver for UI testing.

## Prerequisites
Ensure you have the following installed:
- Node.js
- npm (Node Package Manager)

## Installation
Clone the repository and install the dependencies:

```bash
git clone https://github.com/raharjobayu/ebay-automation-test.git
cd ebay-automation-test
npm install
```

## Running Test
To run the frontend automation tests, use the following command:
```bash
npm test
```

## Folder Structure
```
ebay-automation-test/
├── src/
│   ├── pages/
│   │   ├── homePage.js
│   │   ├── searchPage.js
│   │   └── categoryPage/
│   │       └── CellPhoneAndAccessoriesPage.js
│   ├── selector/
│   │   ├── homeObject.js
│   │   ├── searchObject.js
│   │   └── categoryPageSelector/
│   │       └── cellPhoneAndAccessoriesObject.js
├── test/
│   ├── accessProduct.test.js
│   └── accessProduct.data.js
└── mocharc.json
└── package.json
└── README.md
```
