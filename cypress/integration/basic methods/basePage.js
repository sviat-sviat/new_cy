import * as testData from "../test data/data";
import randomValue from "../basic methods/dataGenerator";
import header from "../page objects/components/header"

class basePage {
    header = new header()
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
        cy.get(input).attachFile(file)  
    }
}

export default basePage