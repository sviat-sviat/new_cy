import basePage from "../basic methods/basePage";

class brand extends basePage {
    selectors = {
        createBrandCenter: '[class*="r container"] [class="btn btn-danger"]',
        brandNameInput: '#brandName',
        brandCodeInput: '#brandCode',
        nextButton: '[type=submit]',
        modalTitle: '[class="modal-title"]'
    }
    
    createBrand(brandName, brandCode) {
        let brandCode1 = this.randomData.getRandomBrandCode()
        let brandCode2 = this.randomData.getRandomBrandCode()
        this.clickElement(this.header.selectors.createBrandHeader)
        this.elementHasText(this.selectors.modalTitle, this.data.modalsHeaders.addBrand)
        this.typeValue(this.selectors.brandNameInput, brandName)
        this.typeValue(this.selectors.brandCodeInput, brandCode)
        this.clickElement(this.selectors.nextButton)
        cy.wait(2500)
        cy.get('body').then(($body) => {
            if($body.text().includes(`Brand with code ${brandCode} already exists`)) {
                this.typeValue(this.selectors.brandCodeInput, brandCode1)
                this.clickElement(this.selectors.nextButton)
                cy.wait(2000)
            } else {
                cy.contains('General Settings').should('be.visible');
            }
        })
        cy.get('body').then(($param) => {
            if($param.text().includes(`Brand with code ${brandCode2} already exists`)) {
                this.typeValue(this.selectors.brandCodeInput, brandCode2)
                this.clickElement(this.selectors.nextButton)
            } else {
                cy.contains('General Settings').should('be.visible');
            }
        })
    }

    selectBrand(brandName) {
        this.clickElement(this.header.selectors.selectBrandDropdown)
        this.typeValue(this.header.selectors.selectBrandDropdownInput, brandName)
        cy.contains(this.header.selectors.itemsInDropdown, brandName).click()
        this.elementHasText(this.header.selectors.selectedBrand, brandName)
    }
}



export default brand