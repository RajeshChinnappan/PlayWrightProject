// @ts-check
const { defineConfig, devices } = require('@playwright/test');

const capabilities = {
  browserName: "Chrome",
  browserVersion: "Latest",
  "LT:Options": {
      platform: "windows 10",
      build: "Playwright Test Build",
      name: "Playwright Testing",
      user: "rajesh.creflectionsinfos",
      accessKey: "oLVyCAWgWoTiJEfKb6X9i4IGIBSPBnxi4kKvNkz5VEaN85U5vL",
      network: true,
      video: true,
      console: true,
      tunnel: false,
      tunnelName: "",
      geoLocation: "",
  },
};

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  //it is used to make in retry in local
  //retries: 2,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  // workers: 1,
  //One worker is assigned to one spec file while running parrllel
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
 // reporter: 'html',
  reporter: [['html'],['json', { outputFile: 'results.json' }],['junit', { outputFile: 'results.xml' }],
             ['allure-playwright', {outputFolder: 'allure-results'}]],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    // connectOptions: {

    //   wsEndpoint:  `wss://cdp.Lambdatest.com/playwright?capabilities=
    //   ${encodeURIComponent(JSON.stringify(capabilities))}`
    // },
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    baseURL: 'https://www.demoblaze.com/index.html',
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on", headless: false

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },


  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']}
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox']}
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari']}
    
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5']}
    // },
    
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

