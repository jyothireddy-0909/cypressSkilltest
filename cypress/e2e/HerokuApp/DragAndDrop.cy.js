import { DragandDropPage } from "../../support/pageActions/herokuApp.po";

describe("Drag and Drop test", () => {
  it("User should be able to drag element A to B and assert the action", () => {
    const boxA_text = 'A'
    const boxB_text = 'B'
    // Visit the drag and drop page
    cy.visit("http://the-internet.herokuapp.com/drag_and_drop")
    DragandDropPage.performAndValidateDragandDrop(boxA_text, boxB_text)
  })
})

