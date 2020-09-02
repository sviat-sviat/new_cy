import * as testData from "../test data/data";
import randomValue from "../basic methods/dataGenerator";
import header from "../page objects/components/header"
import leftMenu from "../page objects/components/left menu"

const loader = '[class*="loader-active"] [class*=loader]';

class basePage {
    header = new header()
    leftMenu = new leftMenu ()
    data = testData
    randomData = new randomValue()    

    typeValue(selector, value) {
        cy.get(selector).clear().type(value)
    }

    clickElement(selector) {
        cy.get(selector).click()
    }

    checkTextPresence(value) {
        cy.contains(value).should("be.visible")
    }

    elementHasText(element, value) {
        cy.get(element).should("have.text", value)
    }

    clickOnText(text) {
        cy.contains(text).click()
    }

    fileUpload(input, file) {
        cy.wait(1000)
        cy.get(input).attachFile(file)  
    }

    waitForLoaderGone() {
        cy.get(loader, {timeout:10000})
        cy.get(loader).should("not.be.visible")
    }

    clikcLastElemnt(element) {
        cy.get(element).then(($elements) => {
            const quant = $elements.length
            cy.get(element).eq(quant - 1).click()
        })
    }
}

export default basePage