const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    iframeUrl: "http://the-internet.herokuapp.com/iframe"
  }
  , e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: { 
      runMode:1,
      openMode:2
    },
  },
});
