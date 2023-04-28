import { IframePageElements, DragandDropPageElements } from '../pageElements/herokuAppPageElements'

export class IframePage {

    //This function is to enter the text to Iframe
    //parameter: text - the text to be entered
    static enterTextToIframe(text) {
        cy.get(IframePageElements.IFRAME).then($iframe => {
            const $body = $iframe.contents().find('body')
            cy.wrap($body).as('iframe')
        })
        cy.get('@iframe').children('p').clear().should('not.exist')
        cy.get('@iframe').type(text + '{ctrl+a}').should('have.text', text)
    }

    //This function is to format the text
    //parameter: formatedType - the fprmat of the text
    static formatText(formatType) {
        cy.get(IframePageElements.FORMAT).contains('Format').click()
        cy.get(IframePageElements.FORMAT_TYPE).contains(formatType).click()
    }

    //This function is to validate the formatted text
    //parameters: formatedType,text
    static validateFormatedText(formatedType, text) {
        let locator
        if (formatedType == 'Bold')
            locator = IframePageElements.FORMAT_BOLD
        else if (formatedType == 'Italic')
            locator = IframePageElements.FORMAT_ITALIC
        // else if (formatedType == 'Any other format')
        //     locator = add the corresponding locator
        
        cy.get(IframePageElements.IFRAME).within(function ($iframe) {
            const frame = $iframe.contents().find(locator)
            cy.wrap(frame).should('be.visible')
            cy.wrap(frame).should('contain', text)
        })
    }
}

export class DragandDropPage {

    //This function is to perform the drag and drop action and validate the performed action
    //parameters: boxA_text,boxB_text - the actual texts of the respective boxes
    static performAndValidateDragandDrop(boxA_text, boxB_text) {
        cy.get(DragandDropPageElements.BOX_A).then(ele => {
            const containerAText = ele.text().trim()
            cy.get(DragandDropPageElements.BOX_A).dragTo(DragandDropPageElements.BOX_B);
            if (containerAText == boxA_text) {
                cy.get(DragandDropPageElements.BOX_A).should("have.text", boxB_text);
                cy.get(DragandDropPageElements.BOX_B).should("have.text", boxA_text);
            }
            else {
                cy.get(DragandDropPageElements.BOX_A).should("have.text", boxA_text);
                cy.get(DragandDropPageElements.BOX_B).should("have.text", boxB_text);
            }
        })
    }
}