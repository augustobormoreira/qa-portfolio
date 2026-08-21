const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 90000,        
    requestTimeout: 10000,          
    responseTimeout: 10000,        

    retries: {
      runMode: 2,
      openMode: 0,
    },

    setupNodeEvents(on, config) {

    },
  },
});