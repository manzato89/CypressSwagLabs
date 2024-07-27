const { defineConfig } = require("cypress");

module.exports = defineConfig({

  numTestsKeptInMemory: 0,
  defaultCommandTimeout: 90000,
  pageLoadTimeout: 71000,
  responseTimeout: 150000,
  requestTimeout: 71000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  animationDistanceThreshold: 5,
  waitForAnimations: true,
  includeShadowDom: true,
  chromeWebSecurity: false,
  reporter: 'junit',
  experimentalMemoryManagement: true,
  reporterOptions: {
    mochaFile: 'cypress/reports/junit/test-results-[hash].xml',
    toConsole: true,
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
