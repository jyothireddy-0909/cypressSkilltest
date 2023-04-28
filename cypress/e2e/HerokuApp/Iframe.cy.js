import { IframePage } from '../../support/pageActions/herokuApp.po'

describe('Iframe Test', () => {

   beforeEach(function(){
      cy.visit(Cypress.env('iframeUrl'))
   })

   it('Types a message into the iframe and formats the text', () => {
      cy.fixture('iframeTestData').then(function (testData) {
         IframePage.enterTextToIframe(testData.BOLD.text)
         IframePage.formatText(testData.BOLD.formatType)
         IframePage.validateFormatedText(testData.BOLD.formatType,testData.BOLD.text)
      })
   })

   it('Types a message into the iframe and formats the text', () => {
      cy.fixture('iframeTestData').then(function (testData) {
         IframePage.enterTextToIframe(testData.ITALIC.text)
         IframePage.formatText(testData.ITALIC.formatType)
         IframePage.validateFormatedText(testData.ITALIC.formatType,testData.ITALIC.text)
      })
   })
})