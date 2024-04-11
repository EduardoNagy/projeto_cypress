const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    screenshotOnRunFailure: true,
    viewportWidth: 1200,
    viewportHeight: 720,
    watchForFileChanges: false,
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'http://www.automationpractice.pl/',
    //waitForAnimations: false,
    //animationDistanceThreshold: 50,
    
    setupNodeEvents(on, config) {
      const cucumber = require ('cypress-cucumber-preprocessor').default;
      on ('file:preprocessor', cucumber())
    },
  },
});    